const Web3ClubsToken = artifacts.require("Web3ClubsToken");


Contract("web3Token", (accounts) =>{
  let token;

  beforeEach(async () => {
    token = await Web3ClubsToken.new();
   // console.log(token);
  } )

  it("should have a name",async()=>) {
    const name = await token.tokwnName();
    assert.equal(name, "Web3ClubsToken");

it("should set the total supply on deployment", async () => {
  const totalSupply = await token.totalSupply()
  assert.equal(totalSupply, 1000000 * 10 ** 18, "Total supply is incorrent") 

})

it("should  transfer tokens between accounts", async () => {
  const sender = accounts [0]
  const receiver = accounts [1]
  const amount = 1000* 10 **18 // 0.000001000 // 1000.00000

  await token.transfer(receiver, amount, {from: sender}) 

  const senderBalance = await token.balanceOf(sender)
  const receiverBalance = await token.balanceOf(receiver)

  assert.equal(senderBalance, 999000 * 10 **18, "sender balance is incorrect")

  assert.equal(receiverBalance, 1000 * 10 **18, "receiver balance is incorrect")
})

}
})