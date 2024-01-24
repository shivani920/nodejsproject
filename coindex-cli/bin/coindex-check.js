// coindex-check.js
import program from "commander";
import check from "../commands/check";

program
  .command("price")
  .description("Check price of coins")
  .option(
    "--coin <type>",
    "Add specific coin types in CSV format",
    "BTC,ETH,XRP"
  )
  .option("--cur <currency>", "Change the currency", "USD")
  .action((cmd) => check.price(cmd));

program.parse(process.argv);

if (!process.argv[2]) {
  program.outputHelp();
}
