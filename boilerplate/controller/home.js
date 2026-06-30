const { urlModel } = require("../model/url.js");

function handleHomePage(req, res) {
  res.render("home");
}

// Lazy loading
// Lazy Loading is a technique where a resource (module, file, image, data, etc.) is loaded only when it is actually needed, instead of loading it at startup.
async function getNanoId(length = 5) {
  let nanoid;
  if (!nanoid) ({ nanoid } = await import("nanoid"));

  return nanoid(length);
}

async function handleGenerateUrl(req, res) {
  const data = req.body;
  const id = await getNanoId();
  if (data) {
    let { url, expiresAt, oneTime: isOneTime, password } = data;
    const shortUrl = `snipr/${id}`;
    let isPasswordProtected = false;
    if (password) isPasswordProtected = true;
    if (isOneTime == "on") isOneTime = true;

    const creationdata = await urlModel.create({
      url,
      id,
      shortUrl,
      isPasswordProtected,
      isOneTime,
    });
  }

  res.send("end");
}

async function handleRedirection (req, res){
  const id = req.params.id;
  
  const urldocs = await urlModel.findOne({ id: id });
  if (!urldocs) return res.send("Short URL not found")
   let updatedClicks = clicks +  1;
    await urlModel.findByIdAndUpdate(_id, { clicks: updatedClicks });
  console.log(_id);
  res.redirect(originalurl).status(301);
};
module.exports = { handleHomePage, handleGenerateUrl, handleRedirection };
