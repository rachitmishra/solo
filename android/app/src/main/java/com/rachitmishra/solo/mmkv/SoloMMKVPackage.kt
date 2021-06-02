package com.rachitmishra.solo.mmkv

import android.view.View
import com.facebook.react.ReactPackage
import com.facebook.react.bridge.NativeModule

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.ReactShadowNode
import com.facebook.react.uimanager.ViewManager


class SoloMMKVPackage: ReactPackage {

    override fun createNativeModules(reactContext: ReactApplicationContext): List<NativeModule> {
        val modules: MutableList<NativeModule> = ArrayList()
        modules.add(SoloMMKVModule(reactContext))
        return modules
    }

    override fun createViewManagers(reactContext: ReactApplicationContext): List<ViewManager<View, ReactShadowNode<*>>> {
        return listOf()
    }
}
