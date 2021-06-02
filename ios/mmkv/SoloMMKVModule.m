

#import <React/RCTBridgeModule.h>
#import "SoloMMKVModule.h"
#import <MMKV/MMKV.h>
#import <React/RCTLog.h>

@implementation SoloMMKVModule

RCT_EXPORT_MODULE(SoloMMKVModule)

RCT_EXPORT_BLOCKING_SYNCHRONOUS_METHOD(getString:(NSString *)key ) {
  MMKV *mmkv = [MMKV defaultMMKV];
  return [mmkv getStringForKey:key];
}

RCT_EXPORT_METHOD(setString:(NSString *)key value: (NSString *)value) {
  MMKV *mmkv = [MMKV defaultMMKV];
  [mmkv setString:value forKey:key];
}

RCT_EXPORT_METHOD(removeKey:(NSString *)key) {
  MMKV *mmkv = [MMKV defaultMMKV];
  [mmkv removeValueForKey:key];
}

RCT_EXPORT_METHOD(getStrings:
                  (NSString *)prefix
                  resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject) {
  MMKV *mmkv = [MMKV defaultMMKV];
  
  NSArray *allKeys = [mmkv allKeys];
  
  NSArray *values = [NSArray array];
  for (NSString *key in allKeys) {
    if ([key hasPrefix:(prefix)]) {
      values = [values arrayByAddingObject: [mmkv getStringForKey: key]];
    }
  }
  
  RCTLogInfo(@"Result %@", values);
  if (values) {
    resolve(values);
  } else {
    NSError *error = [NSError errorWithDomain:@"com.rachitmishra" code:204 userInfo:@"empty"];
    reject(@"empty", @"empty", error);
  }
}

RCT_EXPORT_METHOD(clearAll) {
  MMKV *mmkv = [MMKV defaultMMKV];
  [mmkv clearAll];
}



@end
