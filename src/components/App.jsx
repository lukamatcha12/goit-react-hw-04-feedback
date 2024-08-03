import React, {useState} from 'react'
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notifications } from './Notifications/Notifications';

function App() {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);
  
  const handleClick = type => {
    switch (type) {
      case 'good':
        setGood(prevGood => prevGood+ 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();

   return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();
  const options = ['good', 'neutral', 'bad'];



  return (
    <div>
      <Section title="Please leave a feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={handleClick}
        />
        </Section>

<Section title="Statistics">
        {total >0 ?(
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          
        />
        ):(<Notifications message="There is no feedback" />)}
          
        
        </Section>
        
    </div>
  )
}

export default App
// import { Component } from 'react';
// import { Statistics } from './Statistics/Statistics';
// import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
// import { Section } from './Section/Section';
// import { Notifications } from './Notifications/Notifications';

// export class App extends Component {
//   state = {
//     Good: 0,
//     Bad: 0,
//     Neutral: 0,
//   };

//   countTotalFeedback = () => {
//     const { Good, Neutral, Bad } = this.state;
//     return Good + Neutral + Bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const Total = this.countTotalFeedback();
//     return Math.round((this.state.Good / Total) * 100);
//   };

//   handleClick = type => {
//     this.setState(prevState => ({
//       ...prevState,
//       [type]: prevState[type] + 1,
//     }));
//   };

//   render() {
//     const { Good, Neutral, Bad } = this.state;
//     const totalFeedback = this.countTotalFeedback();
//     const Percentage = this.countPositiveFeedbackPercentage();
//     const options = ['Good', 'Neutral', 'Bad'];

 
    
//     return (
//       <div>
//         <Section title="Please Leave a Feedback">
//           <FeedbackOptions
//             options={options}
//             onLeaveFeedback={this.handleClick}
//           />
          
        // </Section>
        // <Section title="Statistics">
        // {totalFeedback >0 ?(
        //   <Statistics
        //   Good={Good}
        //   Neutral={Neutral}
        //   Bad={Bad}
        //   Total={totalFeedback}
        //   Percentage={Percentage}
        // />
        // ):(<Notifications message="There is no feedback" />)}
          
        
        // </Section>
//       </div>
//     );
//   }
// }
