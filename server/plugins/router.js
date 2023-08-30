import { createRouter } from "h3";
import {
  getTopicList,
  addTopic,
  deleteTopic,
  editTopic,
  getTopic,
} from "../api/topic.js";
import { uploadFile } from "../api/file.js";
import {
  addArticle,
  editArticle,
  getArticle,
  getArticleList,
  getSameArticleList,
  searchArticleList,
  deleteArticle
} from "../api/article.js";
import { getGlobalSetting, setGlobalSetting } from '../api/sys.js'
import { test } from '../api/money.js'

const router = createRouter();

router.get("/api/topic", getTopicList);
router.get("/api/topic/:id", getTopic);
router.post("/api/topic", addTopic);
router.put("/api/topic", editTopic);
router.delete("/api/topic/:id", deleteTopic);

router.get("/api/article", getArticleList);
router.get("/api/article/:id", getArticle);
router.get("/api/article/:id/same", getSameArticleList);
router.get("/api/article/search", searchArticleList);
router.post("/api/article", addArticle);
router.put("/api/article", editArticle);
router.delete("/api/article/:id", deleteArticle);

router.post("/api/file/upload", uploadFile);

router.get("/api/sys/setting", getGlobalSetting);
router.post("/api/sys/setting", setGlobalSetting);

router.get("/api/money/test", test);

export default defineNitroPlugin((nitroApp) => {
  nitroApp.h3App.stack.unshift({ route: "/", ...router });
});
