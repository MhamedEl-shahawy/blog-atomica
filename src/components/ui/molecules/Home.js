import BlogList from "components/ui/atom/BlogList";
import useFetch from "hooks/useFetch";

const Home = () => {
  const { error, isPending, data: blogs } = useFetch(`${process.env.REACT_APP_API_ROOT}blogs`)

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} /> }
    </div>
  );
}
 
export default Home;
