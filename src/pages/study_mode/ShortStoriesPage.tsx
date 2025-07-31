import { ArrowLeft, BookOpenText, ChevronDown, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { getStudyDataFromStorage } from "../../utils/mini_functions";

interface StoryTypes  {
  id: number;
  title: string;
  author: string;
  genre: string;
  summary: string;
  story: string;
  moral: string;
};

export default function ShortStoriesPage() {
  const [selectedStory, setSelectedStory] = useState<StoryTypes | null>(null);
  const [stories, setStories] = useState<StoryTypes[] | null>(null);
  const handleSelectStory = (story: StoryTypes) => setSelectedStory(story);
  const [loading, setLoading]=useState<boolean>(true)
  const handleBack = () => setSelectedStory(null);
  const [grade, setGrade] = useState<number | string>(0);

  useEffect(() => {
    loadDataFromStorage();
  }, []);

  const loadDataFromStorage = async () => {
    const loadedData = await getStudyDataFromStorage();
    console.log(loadedData);
    if (loadedData) {
      const data = await import(
        `../../assets/jsons/grade_${loadedData.grade}/stories.json`
      );
      setGrade(loadedData.grade);
      setStories(data?.default);
      setLoading(false)
    }
  };
  if (selectedStory) {
    return (
      <div className="p-6 max-w-3xl mx-auto bg-black/20 min-h-screen text-gray-900 dark:text-white">
        <button
          onClick={handleBack}
          className="mb-4 flex items-center text-blue-600 dark:text-blue-400"
        >
          <ArrowLeft className="mr-2 w-5 h-5" />
          Back to stories
        </button>
        <h1 className="text-2xl font-bold">{selectedStory.title}</h1>
        <p className="text-sm text-gray-500 mt-1">
          by {selectedStory.author} · {selectedStory.genre}
        </p>
        <p className="mt-4 whitespace-pre-line leading-relaxed">
          {selectedStory.story}
        </p>
        <div className="mt-6 p-4 bg-yellow-100 dark:bg-purple-900 rounded-lg shadow">
          <strong>Moral:</strong> {selectedStory.moral}
        </div>
      </div>
    );
  }
  if(loading){
    return(
      <div className="flex flex-col h-screen justify-center items-center ">
        <Loader2 className="animate-spin text-purple-300 " size={40}/>
        <p className="text-gray-300">Loading stories...</p>
      </div>
    )
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-gray-900 dark:text-white">
        <BookOpenText className="w-6 h-6" />
        Short Stories for grade {grade}
      </h2>


      <div className="grid gap-4 sm:grid-cols-2">
        {stories?.map((story:StoryTypes) => (
          <div
            key={story.id}
            onClick={() => handleSelectStory(story)}
            className="bg-gray-100 dark:bg-black/40 shadow-lg dark:  rounded-xl p-4 cursor-pointer hover:shadow transition"
          >
            <h3 className="text-lg font-semibold">{story.title}</h3>
            <p className="text-sm text-gray-500">
              by {story.author} · {story.genre}
            </p>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 line-clamp-3">
              {story.summary}
            </p>
            <div className="mt-3 text-blue-500 flex items-center text-sm">
              Read story <ChevronDown className="ml-1 w-4 h-4" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
