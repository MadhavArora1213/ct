export const PlacementStats = () => {
  const stats = [
    { 
      id: 1, 
      number: "95%", 
      label: "Placement Rate",
      icon: "📈"
    },
    { 
      id: 2, 
      number: "500+", 
      label: "Company Partners",
      icon: "🤝"
    },
    { 
      id: 3, 
      number: "50k+", 
      label: "Students Placed",
      icon: "👨‍🎓"
    },
    { 
      id: 4, 
      number: "40LPA", 
      label: "Highest Package",
      icon: "💼"
    }
  ];

  return (
    <div 
      data-name="placement-stats" 
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
    >
      {stats.map((stat) => (
        <div
          key={stat.id}
          data-name={`stat-card-${stat.id}`}
          className="stat-card p-8 rounded-3xl border border-black relative overflow-hidden bg-gray-100 hover:bg-blue-200 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
        >
          <div 
            data-name="stat-icon" 
            className="stat-icon w-20 h-20 rounded-full flex items-center justify-center mb-4 text-4xl text-green-600"
          >
            {stat.icon}
          </div>
          <h3 
            data-name="stat-number" 
            className="text-4xl font-bold text-gray-900 mb-2"
          >
            {stat.number}
          </h3>
          <p 
            data-name="stat-label" 
            className="text-black font-medium"
          >
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
