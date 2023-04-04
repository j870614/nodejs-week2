const routes = async (req, res) => {
  const { method, url} = req;
  console.log(method, url);
  const allPosts = await Posts.find();
  console.log(allPosts);
};

export default routes;