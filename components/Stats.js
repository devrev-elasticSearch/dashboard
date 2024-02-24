import GridComponent from "./GridComponent";


const Stats = () => {
    const cardData = [
        { title: 'Usedfrs', number: 25, link: '/gebruikers' },
        { title: 'Companies', number: 100, link: '/dierenartsen' },
        { title: 'Blogs', number: 100, link: '' },
        { title: 'Blogas', number: 100, link: '' }
      ];
    
      return (
        <div>
          <h1>Your Component</h1>
          <GridComponent data={cardData} />
        </div>
      );
    };

export default Stats