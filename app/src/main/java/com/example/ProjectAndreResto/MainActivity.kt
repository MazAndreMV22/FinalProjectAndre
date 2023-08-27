package com.example.ProjectAndreResto

import android.content.res.Configuration
import android.os.Bundle
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import androidx.fragment.app.Fragment
import androidx.recyclerview.widget.GridLayoutManager
import androidx.recyclerview.widget.LinearLayoutManager
import com.google.android.material.bottomnavigation.BottomNavigationView
import com.example.ProjectAndreResto.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity() {
    private lateinit var binding: ActivityMainBinding
    private lateinit var bottomNavigationView: BottomNavigationView

    private val list = ArrayList<Makanan>()


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)

        binding.rvMenu.setHasFixedSize(true)
        list.addAll(listMenu)
        showRecyclerList()

        setContentView(R.layout.activity_main)


        loadFragment(HomeFragment())

        bottomNavigationView = findViewById(R.id.bottom_navigation)
        bottomNavigationView.setOnItemSelectedListener {
            when (it.itemId) {
                R.id.menu_home -> {
                    loadFragment(HomeFragment())
                }

                R.id.menu_dashboard -> {
                    loadFragment(
                        DashboardFragment()
                    )
                }

                R.id.menu_makanan -> {
                    loadFragment(MenuListAdapter())
                }

                R.id.menu_profile -> {
                    loadFragment(ProfileFragment())
                }

            }
            true
        }
    }

    private fun loadFragment(fragment: Fragment) {
        val fragmentManager = supportFragmentManager
        val fragmentTransaction = fragmentManager.beginTransaction()

        fragmentTransaction
            .replace(R.id.fragment_container, fragment)
            .addToBackStack(null)
            .commit()
    }
    private val listMenu: ArrayList<Makanan>
        get() {
            val dataName = resources.getStringArray(R.array.data_nama)
            val dataDescription = resources.getStringArray(R.array.data_deskripsi)
            val dataPhoto = resources.obtainTypedArray(R.array.data_image)
            val listMenu = java.util.ArrayList<Makanan>()
            for (i in dataName.indices) {
                val makanan = Makanan(dataName[i],dataDescription[i], dataPhoto.getResourceId(i, -1))
                listMenu.add(makanan)
            }
            return listMenu
        }

    private fun showRecyclerList() {
        if (applicationContext.resources.configuration.orientation == Configuration.ORIENTATION_LANDSCAPE) {
            binding.rvMenu.layoutManager = GridLayoutManager(this, 2)
        } else {
            binding.rvMenu.layoutManager = LinearLayoutManager(this)
        }
        val MenuListAdapter = MenuListAdapter(list)
        binding.rvMenu.adapter = MenuListAdapter
        MenuListAdapter.setOnItemClickCallback(object : MenuListAdapter.OnItemClickCallback {
            override fun onItemClicked(data: Makanan) {
                showSelectedMenu(data)
            }
        })
    }

    private fun showSelectedMenu(makanan: Makanan) {
        Toast.makeText(this, "Kamu memilih " + makanan.name, Toast.LENGTH_SHORT).show()
    }
}



