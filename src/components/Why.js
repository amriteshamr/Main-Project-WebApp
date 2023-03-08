import img1 from "../assets/camera.jpg";
import img2 from "../assets/python.jpg";
import "./WhyStyles.css";

const Why = () => {
  return (
    <div className="what">
      <div className="first-des">
        <div className="image">
          <img alt="pic2" src={img2} />
        </div>
        <div className="des-text">
          <h2>Why SAM ?</h2>
          <p>
            Our app revolutionizes the way teachers mark attendance by
            simplifying the process with just a single click. This saves
            valuable classroom time, allowing teachers to focus on teaching and
            maximizing the learning experience for their students. Secondly, our
            app uses face recognition technology, which eliminates the need for
            manual attendance taking and significantly reduces the risk of
            errors or inaccuracies. This ensures that attendance records are
            always up-to-date and reliable, making it easier to track student
            attendance and monitor their progress. Thirdly, our app is
            incredibly user-friendly and easy to use, making it accessible for
            teachers of all technical abilities. The app's interface is simple
            and intuitive, allowing teachers to quickly navigate and complete
            attendance tasks without any technical difficulties or delays.
            Lastly, our attendance marking web app is cost-effective and
            environmentally friendly, as it eliminates the need for paper-based
            attendance sheets, reducing the amount of paper waste generated in
            schools. Overall, our app is a convenient, reliable, and
            eco-friendly solution for modern attendance taking, making it the
            perfect choice for any classroom setting.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Why;
