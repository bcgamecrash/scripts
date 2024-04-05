var config = {
  baseBet: { value: 100, type: "number", label: "Base Bet" },
};
function main() {
  let userProfit = 0;
  const PAYOUT = 2;
 
  game.on("GAME_STARTING", function () {
    log.info("********");
    log.info("NEW GAME");
    game.bet(config.baseBet.value, PAYOUT);
  });
 
  game.on("GAME_ENDED", function () {
    let gameInfo = game.history[0];
    if (gameInfo.odds < PAYOUT) {
      log.info("Lost...");
      userProfit -= config.baseBet.value;
    } else {
      log.info("Won!");
      userProfit += config.baseBet.value;
    }
    log.info(`Current profit: ${currency.currencyName}${userProfit}`);
    log.info("END GAME");
  });
}
