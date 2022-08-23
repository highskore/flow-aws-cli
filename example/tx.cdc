transaction(message: String, number: UInt64) {

  prepare(acct: AuthAccount) {}

  execute {
    log(message)
    log(number)
  }
}