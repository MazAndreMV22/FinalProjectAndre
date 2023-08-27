package com.example.ProjectAndreResto;

import android.os.Parcelable
import kotlinx.parcelize.Parcelize

@Parcelize
data class Makanan(
        var name: String,
        var description: String,
        var image: Int
) : Parcelable