import React from 'react';
import PageNavigation from '../components/PageNavigation';

// Define custom icons for this page for better visual storytelling
const WorldIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h10a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.707 4.293l.964-.964a2 2 0 012.828 0l.283.282a2 2 0 002.828 0l.964-.964" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21a9 9 0 100-18 9 9 0 000 18z" /></svg>;
const DigIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const KnowNotKnowIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;


const RoutineDetailCard: React.FC<{ title: string; children: React.ReactNode; headerColor: string; icon: React.ReactNode; delay: number }> = ({ title, children, headerColor, icon, delay }) => (
  <div 
    className="bg-white rounded-xl shadow-2xl overflow-hidden animate-fade-in-up opacity-0"
    style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
  >
    <div className={`p-6 flex items-center space-x-6 ${headerColor}`}>
      <div className="flex-shrink-0 text-white">{icon}</div>
      <h2 className="text-4xl font-extrabold text-white tracking-tight">{title}</h2>
    </div>
    <div className="p-8 md:p-10">
      {children}
    </div>
  </div>
);

const RoutinesExplainedPage: React.FC = () => {
  return (
    <div className="space-y-16">
      <PageNavigation />
      <div className="text-center p-12 rounded-lg shadow-md bg-gradient-to-br from-brand-dark-blue to-brand-cyan">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">Thinking Routines Explained</h1>
        <p className="text-2xl text-blue-100 max-w-4xl mx-auto">A detailed guide to implementing powerful thinking strategies in your classroom.</p>
      </div>

      <div className="space-y-12">
        <RoutineDetailCard 
            title="The 'Whys' of the World"
            headerColor="bg-gradient-to-r from-yellow-500 to-brand-accent"
            icon={<WorldIcon />}
            delay={100}
        >
          <div className="space-y-8 text-xl text-brand-text">
            <div>
              <h3 className="text-3xl font-bold text-yellow-600 mb-3">What is it?</h3>
              <p className="leading-relaxed">
                This routine cultivates deep curiosity by encouraging students to look at everyday objects, systems, or ideas and question why they are the way they are. It follows a three-part inquiry: <strong>What do I know?</strong>, <strong>Why is it this way?</strong>, and <strong>How could it be different?</strong>. It pushes students beyond surface-level observation to explore history, design, culture, and innovation.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-yellow-600 mb-4">How to use it in different subjects:</h3>
              <ul className="space-y-4">
                 <li className="flex items-start">
                    <span className="text-yellow-600 font-bold mr-3 text-2xl">✓</span>
                    <div><strong>Design & Technology:</strong> Students choose an object like a fork. They analyze <em>why it has four tines</em> (history, function) and then brainstorm <em>how it could be different</em> (a spork, specialized forks, futuristic eating utensils).</div>
                </li>
                 <li className="flex items-start">
                    <span className="text-yellow-600 font-bold mr-3 text-2xl">✓</span>
                    <div><strong>Social Studies/Civics:</strong> The topic is "traffic laws". Students explore <em>why we drive on a specific side of the road</em> (history, standardization) and then consider <em>how it could be different</em> (what if traffic flow was dynamic based on time of day?).</div>
                </li>
                 <li className="flex items-start">
                    <span className="text-yellow-600 font-bold mr-3 text-2xl">✓</span>
                    <div><strong>Art History:</strong> Students look at a famous painting like the Mona Lisa. They question <em>why it's so famous</em>. They can then imagine <em>how it could be different</em> if painted by a different artist or in a different era.</div>
                </li>
                 <li className="flex items-start">
                    <span className="text-yellow-600 font-bold mr-3 text-2xl">✓</span>
                    <div><strong>Biology:</strong> The topic is the human hand. Students consider <em>why it has five fingers and an opposable thumb</em>. They can then explore <em>how it could be different</em> by looking at the appendages of other animals and their functions.</div>
                </li>
              </ul>
            </div>
          </div>
        </RoutineDetailCard>

        <RoutineDetailCard 
            title="Curiosity Dig"
            headerColor="bg-gradient-to-r from-rose-500 to-red-600"
            icon={<DigIcon />}
            delay={200}
        >
            <div className="space-y-8 text-xl text-brand-text">
                <div>
                    <h3 className="text-3xl font-bold text-rose-600 mb-3">What is it?</h3>
                    <p className="leading-relaxed">
                        This routine teaches students to be intentional about deepening their curiosity. Instead of settling for a single question, it provides a framework for digging deeper through successive layers of inquiry. Starting with one big question, students then ask questions <strong>about</strong> that question, and then questions <strong>about those subsequent questions</strong>, tunneling their way to a more profound understanding.
                    </p>
                </div>
                <div>
                    <h3 className="text-3xl font-bold text-rose-600 mb-4">How to use it in different subjects:</h3>
                    <ul className="space-y-4">
                        <li className="flex items-start">
                            <span className="text-rose-600 font-bold mr-3 text-2xl">✓</span>
                            <div><strong>Science:</strong> A student's initial question is, "Why is the sky blue?" A <em>Deeper Dig</em> might be, "What is in the atmosphere that affects light?". A <em>Second Round Dig</em> could be, "How does the size of atmospheric particles relate to the wavelength of light they scatter?".</div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-rose-600 font-bold mr-3 text-2xl">✓</span>
                            <div><strong>History:</strong> The initial question is, "Why did the Roman Empire fall?". The <em>Deeper Dig</em> could be, "Which internal factors were most significant?". The <em>Second Round Dig</em> could explore, "What evidence do we have for economic instability in the 3rd century?".</div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-rose-600 font-bold mr-3 text-2xl">✓</span>
                            <div><strong>English/Literature:</strong> A student asks, "Is Hamlet truly mad?". The <em>Deeper Dig</em> could be, "What was the definition of 'madness' in Shakespeare's time?". The <em>Second Round Dig</em> could be, "How does Hamlet's use of language change when he is feigning madness?".</div>
                        </li>
                    </ul>
                </div>
            </div>
        </RoutineDetailCard>

        <RoutineDetailCard 
            title="Know | Not Know | Want to Know"
            headerColor="bg-gradient-to-r from-brand-cyan to-blue-600"
            icon={<KnowNotKnowIcon />}
            delay={300}
        >
            <div className="space-y-8 text-xl text-brand-text">
                <div>
                    <h3 className="text-3xl font-bold text-brand-cyan mb-3">What is it?</h3>
                    <p className="leading-relaxed">
                        This routine is a foundational strategy for metacognition, helping students map out their current understanding of a topic. It's a structured way to surface what they <strong>KNOW</strong>, what they <strong>DON'T KNOW</strong>, and what they <strong>WANT TO KNOW</strong>. By separating these three areas, students can more effectively target their learning, ask better questions, and take ownership of their inquiry process.
                    </p>
                </div>
                <div>
                    <h3 className="text-3xl font-bold text-brand-cyan mb-4">How to use it in different subjects:</h3>
                    <ul className="space-y-4">
                        <li className="flex items-start">
                            <span className="text-brand-cyan font-bold mr-3 text-2xl">✓</span>
                            <div><strong>Science:</strong> Before starting a unit on electricity, students list what they <em>KNOW</em> (e.g., it powers lights), what they <em>DON'T KNOW</em> (e.g., how a battery works), and what they <em>WANT TO KNOW</em> (e.g., can you get electricity from a lemon?).</div>
                        </li>
                        <li className="flex items-start">
                            <span className="text-brand-cyan font-bold mr-3 text-2xl">✓</span>
                            <div><strong>History:</strong> When introducing the Silk Road, students map out what they <em>KNOW</em> (it was an old trade route), what they <em>DON'T KNOW</em> (what goods were traded besides silk?), and what they <em>WANT TO KNOW</em> (how did it change different cultures?).</div>
                        </li>
                         <li className="flex items-start">
                            <span className="text-brand-cyan font-bold mr-3 text-2xl">✓</span>
                            <div><strong>English/Literature:</strong> After a first read of a difficult poem, students write what they <em>KNOW</em> (the basic subject matter), what they <em>DON'T KNOW</em> (the meaning of certain symbols), and what they <em>WANT TO KNOW</em> (what was the poet's life like?).</div>
                        </li>
                         <li className="flex items-start">
                            <span className="text-brand-cyan font-bold mr-3 text-2xl">✓</span>
                            <div><strong>Personal Development:</strong> Students can use this for self-reflection. <em>KNOW</em>: My strengths. <em>DON'T KNOW</em>: The steps to reach my career goal. <em>WANT TO KNOW</em>: What skills should I learn this year?</div>
                        </li>
                    </ul>
                </div>
            </div>
        </RoutineDetailCard>
      </div>
    </div>
  );
};

export default RoutinesExplainedPage;