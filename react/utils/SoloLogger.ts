export const logW = (message: any, tag?: string) => {
  if (__DEV__) {
    console.log(
      `'solo' - ${tag ? tag : ''} typeof ${typeof message} value ${message}`,
    );
  }
};
