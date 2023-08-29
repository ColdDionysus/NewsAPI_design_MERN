const router = require("express").Router();

router.use("/", (req, res) => {
  res.render("index");
});
router.use("/about", (req, res) => {
  res.render("about");
});
router.use("/category", (req, res) => {
  res.render("category");
});
router.use("/contact", (req, res) => {
  res.render("contact");
});
router.use("/singleAudio", (req, res) => {
  res.render("single-audio");
});
router.use("/singleGallery", (req, res) => {
  res.render("single-gallery");
});
router.use("/singleStandard", (req, res) => {
  res.render("single-standard");
});
router.use("/singleVideo", (req, res) => {
  res.render("single-video");
});
router.use("/singleGuide", (req, res) => {
  res.render("single-guide");
});
module.exports = router;
