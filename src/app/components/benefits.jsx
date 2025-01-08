import * as React from 'react';

function Benefits() {

  const contentData = [
    { title: 'TMT ACADEMY', content: 'During the TMT ACADEMY recordings we will take some kids from the community with us to participate in the recordings and meet the speakers in person (selections will be made randomly) terms and conditions apply.' },
    { title: 'Meet Up', content: 'TMT Academy official launch meet-up. In Miami - We will bring some of the community members to the launch. Guide inside the academy for holder members.' },
    { title: 'Evaluations', content: 'Evaluate companies that need solutions to scale. Evaluating community ideas for startups. Evaluation of companies that will be replaceable in the long run by AI.' },
    { title: 'Title 4', content: 'TMT Academy will have a podcast where EXTRAS will be explained about why having companies in other countries, taxes, money, habits, etc. because holding companies, long-term companies, 50% of the jobs will be absorbed, they are creating a new system and your ability to adapt is put at stake. Making connections within the community will be encouraged.' },
    { title: 'Title 5', content: 'Merch from the collection and artists who work in collaboration with the brand. Each holder will have the rights to exploit their token. In effect, they will be able to leverage the construction of the TMT brand.' },
    { title: 'Title 6', content: 'Access to TMT Academy Pre-launch. Access to TMT ACADEMY during the first year.' },
  ];

  return (

    <div className='mx-8 mt-40 flex justify-center items-center flex-wrap' id='beneficios'>
      <h2 className={"font-pop font-bold text-3xl py-9 text-center text-gray-800 dark:text-gray-200"}>Holder Benefits</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {contentData.map((item, index) => (
          <div key={index} className="flex flex-wrap">
            <h3 className='font-pop font-semibold'>{item.title}</h3>
            <p className='font-pop justify-normal align-top'>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Benefits;