const mockData = {
  local: "http://localhost:8080", // docker mock data
  uat: "https://uat-atlas.nevext.com/",
  dev: "https://dev-atlas.nevext.com/",
  qauat: "https://qa-atlas.nevext.com",
  test: "http://10.206.21.223:8080"
}

const target = mockData.dev

console.log(`
Proxy url is:

${target}\n`)

module.exports = {
  context: pathname =>
    !!pathname.match("^/api") ||
    !!pathname.match("^/log(in|out)") ||
    !!pathname.match(/\/(api|oauth2|js-api)\//),
  target,
  changeOrigin: true
}
