import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const BlogPostsEight = React.lazy(() => import("pages/BlogPostsEight"));
const BlogPostsSeven = React.lazy(() => import("pages/BlogPostsSeven"));
const BlogPostsSix = React.lazy(() => import("pages/BlogPostsSix"));
const BlogPostsFive = React.lazy(() => import("pages/BlogPostsFive"));
const BlogPostsFour = React.lazy(() => import("pages/BlogPostsFour"));
const BlogPostsThree = React.lazy(() => import("pages/BlogPostsThree"));
const BlogPostsTwo = React.lazy(() => import("pages/BlogPostsTwo"));
const BlogPostsOne = React.lazy(() => import("pages/BlogPostsOne"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/blogpostsone" element={<BlogPostsOne />} />
          <Route path="/blogpoststwo" element={<BlogPostsTwo />} />
          <Route path="/blogpoststhree" element={<BlogPostsThree />} />
          <Route path="/blogpostsfour" element={<BlogPostsFour />} />
          <Route path="/blogpostsfive" element={<BlogPostsFive />} />
          <Route path="/blogpostssix" element={<BlogPostsSix />} />
          <Route path="/blogpostsseven" element={<BlogPostsSeven />} />
          <Route path="/blogpostseight" element={<BlogPostsEight />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
