import { useState } from "react";
import ContentSectionMain from "./components/MainPage/ContentSection/ContentSection.jsx";
import AppBar from "./components/MainPage/AppBar/AppBar.jsx";
import LoadingPage from "./components/CommonComponents/LoadingPage/LoadingPage.jsx";
import SearchField from "./components/CommonComponents/SearchField/SearchField.jsx";
import PriceBar from "./components/DealsPage/PriceBar/PriceBar.jsx";
import SearchItemList from "./components/DealsPage/SearchItem/searchItemList.jsx";
import StatisticsBar from "./components/DealsPage/StatisticsBar/StatisticsBar.jsx";
import "./App.css";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isHiding, setIsHiding] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  

  // имитация обработки запроса
  const mockApiCall = (url) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const mockResponse = {
          success: true,
          message: `Ссылка "${url}" успешно обработана!`,
          data: {
            title: "Заголовок страницы",
            description: "Описание из мета-тегов...",
          },
        };
        resolve(mockResponse);
      }, 1.5 * 1000);
    });
  };
  const handleSearch = async (link) => {
    if (!link.trim()) {
      alert("Пожалуйста, введите ссылку");
      return;
    }
    const normalizedLink = link.trim();
    setIsLoading(true);
    setIsHiding(false);
    setHasSearched(false);

    try {
      const response = await mockApiCall(normalizedLink);
      console.log("Ответ от сервера:", response);
    } catch (error) {
      console.error("Ошибка при обработке ссылки:", error);
    } finally {
      setIsHiding(true);
      setHasSearched(true);
      setTimeout(() => {
        setIsLoading(false);
        setIsHiding(false);
      }, 250);
    }
  };

  return (
    <>
      <header>
        <AppBar credit={40} />
        {/* пока что заглушка, должно подтягиваться текущий баланс кредитов */}
        {hasSearched && (
          <section className="dealsHeader">
            <SearchField
              placeholder={"Введите ссылку"}
              isIcon={true}
              onSearch={handleSearch}
            />
            <section className="Statistics">
              <StatisticsBar />
              <PriceBar />
            </section>
          </section>
        )}
      </header>
      <main className="main">
        {isLoading && <LoadingPage isHiding={isHiding} />}
        {!hasSearched && !isLoading && <ContentSectionMain onSearch={handleSearch} />}
        {hasSearched && <SearchItemList />}
      </main>
    </>
  );
}
