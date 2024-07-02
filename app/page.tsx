// pages/index.tsx
import Sidebar from '@/components/sidebar';
import Header from '@/components/header';
import AboutMe from '@/components/aboutMe';
import MyContact from '@/components/myContact';
import MyProject from '@/components/myProject';
import Footer from '@/components/footer';
// Import other components similarly

const Home = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-30 w-full">
        <Header />
        <AboutMe />
        <MyProject />
        <MyContact />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
