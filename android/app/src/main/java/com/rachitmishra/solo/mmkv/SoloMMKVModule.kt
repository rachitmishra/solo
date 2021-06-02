package com.rachitmishra.solo.mmkv

import com.facebook.react.bridge.*
import com.tencent.mmkv.MMKV
import java.lang.NullPointerException
import java.lang.RuntimeException

class SoloMMKVModule(context: ReactApplicationContext) : ReactContextBaseJavaModule(context) {

    @ReactMethod(isBlockingSynchronousMethod = true)
    fun getString(key: String): String {
        val kv = MMKV.defaultMMKV()

        kv ?: return ""

        return kv.decodeString(key) ?: ""
    }

    @ReactMethod
    fun setString(key: String, value: String) {
        val kv = MMKV.defaultMMKV()
        kv?.encode(key, value)
    }

    @ReactMethod
    fun getStrings(prefix: String, promise: Promise) {
        val kv = MMKV.defaultMMKV()

        kv ?: return promise.reject(NullPointerException())

        val allKeys = kv.allKeys()

        allKeys ?: return promise.reject(NullPointerException())

        val allValues = allKeys.filter { key -> key.startsWith(prefix) }.map { key -> kv.decodeString(key) }

        if (allValues.isEmpty()) {
            return promise.reject(RuntimeException("empty"))
        }

        promise.resolve(allValues.toWritableArray())
    }

    private fun List<String?>.toWritableArray(): WritableArray {
        val result = Arguments.createArray()
        for (value in this) {
            result.pushString(value)
        }
        return result
    }

    @ReactMethod
    fun removeKey(key: String) {
        val kv = MMKV.defaultMMKV()
        kv?.removeValueForKey(key)
    }

    @ReactMethod
    fun clearAll() {
        val kv = MMKV.defaultMMKV()
        kv?.clearAll()
    }

    override fun getName(): String {
        return "SoloMMKVModule"
    }
}
