import React from 'react';

export const ThreeCsTemplate: React.FC = () => {
    return (
        <div className="p-4 bg-white rounded-2xl border-2 border-gray-200 font-sans shadow-inner">
            <div className="text-center bg-brand-dark-blue text-white p-3 rounded-t-xl">
                <p className="text-xs tracking-widest">IGCSE - PROTOCOLS</p>
                <h2 className="text-3xl font-bold font-serif italic tracking-wider">THE THREE C'S</h2>
            </div>

            <div className="p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch my-4">
                {/* Check */}
                <div className="flex flex-col">
                    <div className="bg-brand-cyan text-white text-center py-1.5 px-4 rounded-full shadow-lg mb-2 font-bold text-lg">CHECK</div>
                    <div className="flex-grow bg-brand-light-blue p-4 rounded-lg border-2 border-brand-cyan/50">
                        <p className="font-semibold text-brand-dark-blue">List 3-5 key facts you remember know about network protocols.</p>
                    </div>
                </div>
                
                {/* Challenge */}
                <div className="flex flex-col">
                     <div className="bg-brand-accent text-brand-dark-blue text-center py-1.5 px-4 rounded-full shadow-lg mb-2 font-bold text-lg">CHALLENGE</div>
                     <div className="flex-grow bg-yellow-100 p-4 rounded-lg border-2 border-brand-accent/50">
                        <p className="font-semibold text-brand-dark-blue">Identify 2-3 things you don't fully understand about protocols.</p>
                    </div>
                </div>

                {/* Diagram */}
                <div className="flex items-center justify-center p-4">
                   <div className="relative w-48 h-48">
                        <div className="absolute inset-0 border-4 border-gray-300 rounded-full animate-spin [animation-duration:10s]"></div>
                        <div className="absolute inset-2 border-4 border-gray-300 border-dashed rounded-full"></div>
                        <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center text-gray-700 font-bold text-lg">PROTOCOLS</div>
                        {['FTP', 'TCP', 'POP', 'HTTP', 'SMTP', 'SSL'].map((label, i) => {
                            const angle = i * 60;
                            const x = 50 + 45 * Math.cos(angle * Math.PI / 180);
                            const y = 50 + 45 * Math.sin(angle * Math.PI / 180);
                            return (
                                <div key={label} className="absolute text-xs bg-gray-200 px-2 py-1 rounded-full shadow" style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}>
                                    {label}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
             <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                  <div className="flex flex-col items-center justify-center">
                    <div className="text-5xl mb-2">👑</div>
                    <div className="bg-rose-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg transform -rotate-6 text-lg">CRACK</div>
                  </div>
                 <div className="bg-rose-100 p-4 rounded-lg border-2 border-rose-500/50 text-center">
                    <p className="font-semibold text-brand-dark-blue">One-Minute Expert - A volunteer to explains tricky concept to the class.</p>
                 </div>
             </div>
        </div>
    );
};