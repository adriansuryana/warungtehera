"use client";

interface StoryItem {
  id: string;
  emoji: string;
  title: string;
  isPromo?: boolean;
}

const STORIES: StoryItem[] = [
  { id: "wings", emoji: "🍗", title: "Wings 15K", isPromo: true },
  { id: "nasi", emoji: "🍚", title: "Nasi Bakar" },
  { id: "taichan", emoji: "🍢", title: "Taichan" },
  { id: "suke", emoji: "🍲", title: "Mix Suke" },
  { id: "teh", emoji: "🍵", title: "Teh Hera" },
  { id: "halal", emoji: "✨", title: "100% Halal" },
  { id: "investor", emoji: "💼", title: "Kemitraan", isPromo: true },
];

interface StoriesBarProps {
  onSelectStory: (id: string) => void;
}

export default function StoriesBar({ onSelectStory }: StoriesBarProps) {
  return (
    <div className="w-full bg-[#D8E500] py-3 px-4 overflow-x-auto no-scrollbar border-b border-[#084C3F]/20">
      <div className="flex items-center gap-3 w-max">
        {STORIES.map((story) => (
          <button
            key={story.id}
            onClick={() => onSelectStory(story.id)}
            className="flex flex-col items-center gap-1 group active:scale-95 transition-transform"
          >
            {/* Story Ring */}
            <div
              className={`w-14 h-14 rounded-full p-0.5 flex items-center justify-center transition-all ${
                story.isPromo
                  ? "bg-gradient-to-tr from-[#084C3F] to-white"
                  : "border-2 border-[#084C3F] bg-[#D8E500]"
              }`}
            >
              <div className="w-full h-full rounded-full bg-[#084C3F] flex items-center justify-center text-xl shadow-inner group-hover:scale-105 transition-transform">
                <span>{story.emoji}</span>
              </div>
            </div>
            <span className="text-[10px] font-black uppercase text-[#084C3F] max-w-[60px] truncate text-center">
              {story.title}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
