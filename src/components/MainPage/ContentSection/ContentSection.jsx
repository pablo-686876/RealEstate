import SearchField from "../../CommonComponents/SearchField/SearchField.jsx";
import "./ContentSection.css";

export default function ContentSectionMain({onSearch}) {
  return (
    <section>
      <div className="contentSectionMain">
        <h1 className="contentSectionMainTitle">Найти сделки 🏠 </h1>
        <SearchField placeholder={"Введите ссылку"} isIcon={true} onSearch={onSearch}/>
        <p className="contentSectionSecondText">
          *Введите ссылку в формате: https://www.ss.lv/...
        </p>
      </div>
      <h2 className="contentSectionSecondTitle">
        <span className="accent">Анализ</span> рынка с подбром похожих{" "}
        <span className="accent">объявлений</span>
      </h2>
    </section>
  );
}
