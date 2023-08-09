const router = require("koa-router")();
router.prefix("/devopg");
router.get("/", async (ctx, next) => {
  const request = ctx.request;
  const query = request.query;
  console.log(query);
  const { mail, token } = query;

  if (mail == 1 && token == 2) {
    await ctx.render("success", {
      title: "成功",
    });
  } else {
    await ctx.render("success", {
      title: "失败",
    });
  }
});

module.exports = router;
