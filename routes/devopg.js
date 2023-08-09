const router = require("koa-router")();
const { run } = require("../controller/sample");
router.prefix("/devopg");
router.get("/", async (ctx, next) => {
  const request = ctx.request;
  const query = request.query;
  const results = await run();
  await ctx.render("success", {
    title: "成功",
  });
  // // const { mail } = query;
  // const results = await run();
  // ctx.json(results);

  // if (mail == 1) {
  //   await ctx.render("success", {
  //     title: "成功",
  //   });
  // } else {
  //   await ctx.render("success", {
  //     title: "失败",
  //   });
  // }
});

module.exports = router;
