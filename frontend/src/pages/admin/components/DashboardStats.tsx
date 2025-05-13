import { useMusicStore } from "@/stores/useMusicStore";
import { Library, ListMusic, Loader, PlayCircle, Users2 } from "lucide-react";
import { StatsCard } from "./StatsCardProps";

export const DashboardStats = () => {
  const { stats, isLoading } = useMusicStore();

  if (isLoading) {
    <div className="h-screen w-full flex items-center justify-center">
      <Loader className="size-8 text-emerald-500 animate-spin" />
    </div>;
  }

  if (!stats) {
    return <div className="text-red-500">Failed to load statistics.</div>;
  }

  const statsData = [
    {
      icon: ListMusic,
      label: "Total Songs",
      value: (stats.totalSongs ?? 0).toLocaleString(),
      bgColor: "bg-emerald-500/10",
      iconColor: "text-emerald-500",
    },
    {
      icon: Library,
      label: "Total Albums",
      value: (stats.totalAlbums ?? 0).toLocaleString(),
      bgColor: "bg-violet-500/10",
      iconColor: "text-violet-500",
    },
    {
      icon: Users2,
      label: "Total Artists",
      value: (stats.totalArtists ?? 0).toLocaleString(),
      bgColor: "bg-orange-500/10",
      iconColor: "text-orange-500",
    },
    {
      icon: PlayCircle,
      label: "Total Users",
      value: (stats.totalUsers ?? 0).toLocaleString(),
      bgColor: "bg-sky-500/10",
      iconColor: "text-sky-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {statsData.map((stat) => (
        <StatsCard
          key={stat.label}
          icon={stat.icon}
          label={stat.label}
          value={stat.value}
          bgColor={stat.bgColor}
          iconColor={stat.iconColor}
        />
      ))}
    </div>
  );
};
