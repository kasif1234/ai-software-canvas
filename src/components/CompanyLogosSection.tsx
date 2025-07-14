
const CompanyLogosSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-4">Education & Professional Experience</h3>
          <p className="text-muted-foreground">
            Academic excellence and industry experience across Qatar's premier institutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {/* Qatar University */}
          <div className="group cursor-pointer transform transition-all duration-500 hover:scale-110 hover:-translate-y-2">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 w-48 h-32 flex items-center justify-center">
              <img 
                src="/lovable-uploads/3c7f516b-4b52-464d-898c-8bad575bef38.png" 
                alt="Qatar University"
                className="max-w-full max-h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>

          {/* Carnegie Mellon University Qatar */}
          <div className="group cursor-pointer transform transition-all duration-500 hover:scale-110 hover:-translate-y-2" style={{ animationDelay: '100ms' }}>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 w-48 h-32 flex items-center justify-center">
              <img 
                src="/lovable-uploads/4389ecdd-9984-4cbf-a2bc-2f949c89b492.png" 
                alt="Carnegie Mellon University Qatar"
                className="max-w-full max-h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>

          {/* Qatar Science & Technology Park */}
          <div className="group cursor-pointer transform transition-all duration-500 hover:scale-110 hover:-translate-y-2" style={{ animationDelay: '200ms' }}>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 w-48 h-32 flex items-center justify-center">
              <img 
                src="/lovable-uploads/a5a9622a-901b-49cb-a135-599bf5463e29.png" 
                alt="Qatar Science & Technology Park"
                className="max-w-full max-h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>

          {/* Qatar Computing Research Institute */}
          <div className="group cursor-pointer transform transition-all duration-500 hover:scale-110 hover:-translate-y-2" style={{ animationDelay: '300ms' }}>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 w-48 h-32 flex items-center justify-center">
              <img 
                src="/lovable-uploads/0603fe36-fb04-4d83-b7ec-72ec3aa21a95.png" 
                alt="Qatar Computing Research Institute"
                className="max-w-full max-h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>

          {/* Hamad Medical Corporation */}
          <div className="group cursor-pointer transform transition-all duration-500 hover:scale-110 hover:-translate-y-2" style={{ animationDelay: '400ms' }}>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 w-48 h-32 flex items-center justify-center">
              <img 
                src="/lovable-uploads/bbf9bb19-62a6-435c-8630-fd39b598e5ea.png" 
                alt="Hamad Medical Corporation"
                className="max-w-full max-h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyLogosSection;
