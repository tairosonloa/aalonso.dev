module.exports = {
  process(fileContent) {
    return `
      const handler = {
        get (target, className) {
          const cssContent = ${'`'}${fileContent}${'`'}

          if(!cssContent.match(className)) {
            console.warn("Unable to find className", className)
          }

          return className
        }
      };

      const proxy = new Proxy({}, handler);
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = proxy;
    `
  },
}
