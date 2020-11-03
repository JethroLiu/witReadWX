"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller } = app;
  router.get("/slider", controller.home.slider); // 轮播图
  router.get("/newbook", controller.home.newbook); // 最新图书
  router.get("/homehot", controller.home.homehot); // 热门图书

  router.get("/gettype", controller.allbook.gettype); // 分类列表
  router.get("/getallbook", controller.allbook.getallbook); // 图书列表
  router.get("/searchBook", controller.allbook.searchBook); // 搜索图书

  router.get("/bookDetail", controller.bookDetail.bookDetail); // 图书详情

  router.get("/news", controller.news.news); // 新闻公告
};
