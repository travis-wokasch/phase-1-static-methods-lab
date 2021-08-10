class Formatter {
  static capitalize(str) {
    return str.charAt(0).toUpperCase() +str.slice(1)
  }

  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9-']+/g)
 }

  static titleize(str) {
    const words = str.split(" ");

    for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    return words.join(" ")
  }

}