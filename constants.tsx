
import React from 'react';
import { LearnerAttribute, ThinkingRoutine, CommunityPost, Example, MediaType } from './types';
import { ThreeCsTemplate } from './components/templates/ThreeCsTemplate';
import { WhysOfTheWorldTemplate } from './components/templates/WhysOfTheWorldTemplate';
import { CuriosityDigTemplate } from './components/templates/CuriosityDigTemplate';
import { KnowNotKnowTemplate } from './components/templates/KnowNotKnowTemplate';
import { ThinkPairShareTemplate } from './components/templates/ThinkPairShareTemplate';

export const ALL_ROUTINES: ThinkingRoutine[] = [
  {
    id: '3cs',
    name: 'The 3 C\'s: Check, Challenge, Crack',
    attribute: LearnerAttribute.Creative, // Recategorized from Curious to Creative
    description: 'A routine to activate prior knowledge, identify areas of confusion, and collaboratively solve difficult concepts.',
    targetDisposition: 'Encourages students to assess their own understanding, pinpoint knowledge gaps, and leverage peer learning to overcome challenges.',
    steps: [
      { title: 'Check', description: 'List 3-5 key facts you already know about the topic. This activates prior knowledge.' },
      { title: 'Challenge', description: 'Identify 2-3 things you don\'t fully understand. This helps pinpoint areas for growth.' },
      { title: 'Crack', description: 'A volunteer "One-Minute Expert" explains a tricky concept to the class, clarifying misunderstandings.' },
    ],
    interactiveTemplateComponent: ThreeCsTemplate,
    chatGptPrompt: (subject, topic) => `
As an expert in ${subject}, I am preparing a lesson on "${topic}" using the '3 C's' thinking routine (Check, Challenge, Crack). Please generate the following content for my students:

1.  **Check Phase:** Provide 5-7 key, foundational facts about "${topic}" that students should already know. These should be clear and concise.
2.  **Challenge Phase:** Formulate 3-4 common questions or points of confusion related to "${topic}" that students might struggle with. These should encourage deeper thinking.
3.  **Crack Phase:** Write a clear, simple, and engaging "One-Minute Expert" explanation for one of the challenging concepts you listed. Use an analogy if possible.
`,
    detailedExplanation: {
      whatIsIt: "This routine is a powerful strategy for making learning visible. It helps students activate their existing knowledge about a topic, identify specific areas where they are confused, and then collaboratively \"crack\" those difficult concepts. Instead of a passive review session, it turns the process into an active, diagnostic, and collaborative experience.",
      howToUse: {
        title: "How to use it in different subjects:",
        subjects: [
          { name: "Science", description: "Before a lesson on photosynthesis, students could Check by listing facts about plants and energy. They might Challenge the chemical equation itself. A peer can then Crack the concept by explaining the role of chlorophyll." },
          { name: "History", description: "When studying the causes of World War I, students can Check key events and figures. They might Challenge the complex web of alliances. The class can then Crack the \"powder keg\" analogy by explaining the context of Archduke Ferdinand's assassination." },
          { name: "Mathematics", description: "To review algebraic equations, students Check the order of operations (BEDMAS/PEMDAS). They could Challenge how to handle quadratic formulas, and a peer can Crack it by walking through a problem on the board." }
        ]
      }
    }
  },
  {
    id: 'whys-of-the-world',
    name: 'The \'Whys\' of the World',
    attribute: LearnerAttribute.Curious,
    description: 'A routine for developing curiosity about everyday objects, concepts, and systems we often take for granted.',
    targetDisposition: 'Developing curiosity about the world around us – its topics, devices, concepts, customs, laws, natural objects, etc. – that we often take for granted.',
    steps: [
      { title: 'What is something I already know a fair amount about?', description: 'Choose a thing, device, situation, custom, law, event, etc. that you know something about.' },
      { title: 'Why is this the way it is?', description: 'Explore why it is the way it is. Did natural forces make it that way? Is it something with a purpose? Does it reflect our culture?' },
      { title: 'How could it be different?', description: 'Think of versions that might work better, how to fix it if it does harm, or how it is different in other parts of the world or in the past.' },
    ],
    interactiveTemplateComponent: WhysOfTheWorldTemplate,
    chatGptPrompt: (subject, topic) => `
I am a ${subject} teacher exploring the topic of "${topic}" with my students using "The 'Whys' of the World" thinking routine. Please generate a set of exploratory questions and ideas based on the three steps:

1.  **What do I know?:** Briefly summarize the core function or concept of "${topic}".
2.  **Why is it this way?:** Provide 3-5 potential reasons (historical, functional, cultural, scientific) that explain why "${topic}" exists or works in its current form.
3.  **How could it be different?:** Suggest 3 innovative or alternative ways "${topic}" could be designed, function, or be perceived. Consider variations from different cultures, time periods, or even futuristic concepts.
`,
    detailedExplanation: {
      whatIsIt: "This routine is all about cultivating deep curiosity for the world around us. It encourages students to look at everyday objects, systems, or concepts that we often take for granted and question why they are the way they are. It pushes students to think like designers, historians, and innovators.",
      howToUse: {
        title: "How to use it in different subjects:",
        subjects: [
          { name: "Design & Technology", description: "Students could analyze a simple fork. They'd explore why it has four tines (its history and function) and then brainstorm how it could be different (a spork, specialized forks, etc.)." },
          { name: "Social Studies/Civics", description: "The class could investigate traffic laws. They can question why we drive on a specific side of the road and then consider how it could be different, like a dynamic traffic flow system." },
          { name: "Biology", description: "Using the human hand as a topic, students can explore why it has five fingers and an opposable thumb. They can then explore how it could be different by looking at the appendages of other animals." }
        ]
      }
    }
  },
  {
    id: 'curiosity-dig',
    name: 'Curiosity Dig',
    attribute: LearnerAttribute.Curious,
    description: 'A routine for intentionally fostering and deepening curiosity about any topic through layered questioning.',
    targetDisposition: 'Building the skill of intentionally fostering curiosity about a topic. It helps cultivate curiosity about any topic we encounter.',
    steps: [
      { title: 'Initial Question', description: 'What is one QUESTION about the topic that you would like to know the answer to?' },
      { title: 'Dig Deeper', description: 'What questions would help you DIG INTO the original question? Ask clarifying or expanding questions.' },
      { title: 'Second Round Dig', description: 'Now ask questions that help you DIG INTO your second-round questions. After generating, consider which questions would be most interesting to pursue.' },
    ],
    interactiveTemplateComponent: CuriosityDigTemplate,
    chatGptPrompt: (subject, topic) => `
I am planning a ${subject} lesson on "${topic}" using the "Curiosity Dig" thinking routine. Please help me generate a questioning pathway for my students:

1.  **Initial Question:** Propose a broad, engaging "Level 1" question about "${topic}" to spark initial curiosity.
2.  **Dig Deeper:** Based on that initial question, generate 3-4 "Level 2" questions that would help students dig into the original question. These should be more specific.
3.  **Second Round Dig:** For one of the "Level 2" questions, generate 2-3 "Level 3" questions that dig even deeper, perhaps asking for evidence, implications, or connections to other concepts.
`,
    detailedExplanation: {
      whatIsIt: "This routine teaches students the skill of intentionally deepening their own curiosity. Instead of being satisfied with a surface-level question, it provides a framework for digging deeper through layered questioning, tunneling down to a more profound and nuanced understanding of a topic.",
      howToUse: {
        title: "How to use it in different subjects:",
        subjects: [
          { name: "Science", description: "The initial question might be, \"Why is the sky blue?\" A Deeper Dig could be, \"What is in the atmosphere that affects light?\" A Second Round Dig could then be, \"How does the size of atmospheric particles relate to the wavelength of light they scatter?\"" },
          { name: "History", description: "Start with, \"Why did the Roman Empire fall?\" The Deeper Dig could be, \"Which internal factors were most significant?\" The Second Round Dig could then be, \"What evidence do we have for economic instability in the 3rd century?\"" },
          { name: "Literature", description: "A student asks, \"Is Hamlet truly mad?\" The Deeper Dig might be, \"What was the definition of 'madness' in Shakespeare's time?\" The Second Round Dig could explore, \"How does Hamlet's use of language change when he is feigning madness versus when he is alone?\"" }
        ]
      }
    }
  },
  {
    id: 'know-not-know',
    name: 'Know | Not Know | Want to Know',
    attribute: LearnerAttribute.Curious,
    description: 'A routine for reducing uncertainty by exploring what is known, unknown, and desired to be known.',
    targetDisposition: 'Motivation to reduce uncertainty or lack of understanding by seeking more information, perspectives, ideas, and experiences. Embracing the reality that we do not know all the answers, and developing the humility to be curious, to learn and to grow intellectually.',
    steps: [
        { title: 'What do I KNOW about it?', description: 'List four or five key things you already know.' },
        { title: 'What do I NOT KNOW?', description: 'Create a list of questions about it that you have no answer to.' },
        { title: 'What do I WANT TO KNOW?', description: 'Look over the list of questions and select 1-2 that you want to learn more about.' },
    ],
    interactiveTemplateComponent: KnowNotKnowTemplate,
    chatGptPrompt: (subject, topic) => `
I am planning a ${subject} lesson on "${topic}" using the "Know | Not Know | Want to Know" thinking routine. Please generate content for my students:

1.  **Know:** Provide 4-5 common facts or concepts about "${topic}" that students might already know.
2.  **Not Know:** Formulate 3-4 probing questions about "${topic}" that would challenge students and reveal gaps in their understanding.
3.  **Want to Know:** Suggest 2 intriguing avenues of inquiry or deeper research questions based on the 'Not Know' section to spark genuine curiosity.
`
  },
  {
    id: 'team-think-pair-share',
    name: 'Team Think-Pair-Share',
    attribute: LearnerAttribute.Collaborative,
    description: 'A classic routine to encourage individual thinking, partner discussion, and whole-class sharing.',
    targetDisposition: 'Fosters active listening, articulate communication, and the confidence to share ideas within a group setting.',
    steps: [
      { title: 'Think', description: 'Individually, students think about a question or prompt and jot down their ideas.' },
      { title: 'Pair', description: 'Students pair up to discuss their individual thoughts, building on each other\'s ideas.' },
      { title: 'Share', description: 'Pairs share their combined ideas with the rest of the class, fostering a group discussion.' },
    ],
    interactiveTemplateComponent: ThinkPairShareTemplate,
    chatGptPrompt: (subject, topic) => `
I am a ${subject} teacher preparing a lesson on "${topic}" using the 'Think-Pair-Share' routine. Please generate the following:

1.  **A compelling "Think" prompt:** Create an open-ended question about "${topic}" that encourages individual reflection and diverse responses.
2.  **"Pair" discussion points:** Suggest 2-3 guiding questions or points for pairs to discuss to deepen their conversation.
3.  **"Share" facilitation ideas:** Provide a strategy for effectively gathering and synthesizing the shared ideas from the whole class.
`
  },
];

export const CREATIVE_ROUTINES: ThinkingRoutine[] = ALL_ROUTINES.filter(
  (r) => r.attribute === LearnerAttribute.Creative
);

export const CURIOUS_ROUTINES: ThinkingRoutine[] = ALL_ROUTINES.filter(
  (r) => r.attribute === LearnerAttribute.Curious
);

export const COLLABORATIVE_ROUTINES: ThinkingRoutine[] = ALL_ROUTINES.filter(
  (r) => r.attribute === LearnerAttribute.Collaborative
);

export const COMMITTED_ROUTINES: ThinkingRoutine[] = ALL_ROUTINES.filter(
  (r) => r.attribute === LearnerAttribute.Committed
);

export const COMPASSIONATE_ROUTINES: ThinkingRoutine[] = ALL_ROUTINES.filter(
  (r) => r.attribute === LearnerAttribute.Compassionate
);

export const CRITICAL_ROUTINES: ThinkingRoutine[] = ALL_ROUTINES.filter(
  (r) => r.attribute === LearnerAttribute.Critical
);


export const MOCK_EXAMPLES: Example[] = [
    {
        id: 'ex1',
        title: 'Curiosity Dig: The Water Cycle',
        subject: 'Science',
        keyStage: 'KS3',
        topic: 'The Water Cycle',
        routineId: 'curiosity-dig',
        templateContent: {
            initial: 'Is climate change affecting the water cycle?',
            deeper: '• How does a higher temperature affect evaporation?\n• Does more water vapor in the atmosphere lead to more intense rain?',
            second: '• What is the evidence linking atmospheric water vapor to extreme weather events?\n• How can we model these changes to predict future impact?'
        },
    },
    {
        id: 'ex2',
        title: 'The \'Whys\' of the World: The Berlin Wall',
        subject: 'History',
        keyStage: 'KS4',
        topic: 'The Cold War',
        routineId: 'whys-of-the-world',
        templateContent: {
            know: 'It was a guarded concrete barrier that physically and ideologically divided Berlin from 1961 to 1989.',
            why: 'It was built by East Germany (GDR) to stop its citizens from fleeing to the democratic West. It became a symbol of the "Iron Curtain" separating Western Europe and the Eastern Bloc.',
            different: 'What if it had been a demilitarized zone instead of a wall? How did its existence affect the art and culture of West Berlin? Could a similar division exist today with digital borders?'
        },
    },
    {
        id: 'ex3',
        title: 'Know | Not Know | Want to Know: Symbolism in \'Macbeth\'',
        subject: 'English Literature',
        keyStage: 'KS5',
        topic: 'Shakespeare\'s Macbeth',
        routineId: 'know-not-know',
        templateContent: {
            know: [
                '• Blood symbolizes guilt.',
                '• The dagger represents Macbeth\'s bloody ambition.',
                '• Weather reflects the unnatural events.',
                '• Sleep symbolizes innocence and peace.',
            ],
            notKnow: [
                '• What does clothing symbolize beyond just rank?',
                '• Is the recurring "child" imagery only about heirs?',
                '• Why is the number three so prevalent?',
            ],
            wantToKnow: [
                '• I want to research the symbolic meaning of clothing in Jacobean times.',
                '• I want to explore how the symbolism of childhood connects to the theme of the future.',
            ]
        },
    },
    {
        id: 'ex4',
        title: 'Think-Pair-Share: Solving Linear Equations',
        subject: 'Mathematics',
        keyStage: 'KS3',
        topic: 'Algebra',
        routineId: 'team-think-pair-share',
        templateContent: {
            think: 'What are the key steps to solve the equation 3x + 7 = 19? What is the most common mistake someone might make?',
            pair: 'Compare your steps with your partner. Did you both identify the same potential mistake? Try to solve a different equation together: 5(x - 2) = 25.',
            share: 'Our group agreed that the first step is to isolate the variable term by subtracting 7 from both sides. A common mistake is to add 7 instead of subtracting.'
        },
    },
];

export const MOCK_COMMUNITY_POSTS: CommunityPost[] = [];

export const ICONS = {
    creative: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="currentColor"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z" /></svg>,
    curious: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27A6.5 6.5 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>,
    collaborative: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>,
    committed: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2v11h3v9l7-12h-4l4-8z"/></svg>,
    compassionate: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>,
    critical: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="currentColor"><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69-.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61-.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/></svg>
};
