import BlogAppBar from "../components/blog-app-bar";
import styles from "./styles/index.module.scss";
import HeroSection from "../components/hero-section";
import PostSummarySection from "../components/post-summary-section";

export default function Home() {
  return (
    <div>
      <BlogAppBar title="A Blog" />
      <HeroSection />
      <PostSummarySection />
    </div>
  );
}
