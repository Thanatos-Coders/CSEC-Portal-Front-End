import ProgressData from "@/components/pages/allmembers/progress/ProgressData";

export default function page() {
  return (
    <div>
      <ProgressData
        overallProgress={75}
        metrics={{
          leftMetric: 28,
          rightMetric: 56,
          Headsup: 0,
          Absent: 3,
          Present: 7,
        }}
      />
    </div>
  );
}
