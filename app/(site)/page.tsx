import ListItem from "@/components/ListItem";
import Header from "../../components/Header";
import getSongs from "@/actions/getSongs";
import PageContent from "./components/PageContent";
export default async function Home() {
  const songs = await getSongs();
  return (
    <div className="text-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header>
        <div className=" mb-2">
          <h1 className="text-white text-3xl font-semibold">welcome back</h1>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 mt-4
          "
          >
            <ListItem href='liked' name="Liked songs" image="/liked.jpg" />
          </div>
        </div>
      </Header>
      <div className="mt-2 mb-7 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-white">Newest songs</h1>
        </div>
        <PageContent songs={songs} />
      </div>
    </div>
  );
}
