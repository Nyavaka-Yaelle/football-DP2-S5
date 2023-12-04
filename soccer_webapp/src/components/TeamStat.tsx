import { useEffect, useState } from "react";
import { fetchDataSvc } from "../services/main.services";

const TeamStat = () => {
  const [mainTab, setMainTab] = useState<"general" | "defense" | "attack">(
    "general"
  );
  const [subTab, setSubTab] = useState<"general" | "inside" | "outside">(
    "general"
  );
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const _data = await fetchDataSvc("/");
      setData(_data);
    };
    // fetch initial data on app load
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleRefetchData = async (_tab: string, _subTab: string) => {
    let dataUrl = "";
    switch (_tab) {
      case "general":
        dataUrl += "";
        break;
      case "attack":
        dataUrl += "/attack";
        break;
      case "defense":
        dataUrl += "/defense";
        break;
      default:
        break;
    }
    switch (_subTab) {
      case "general":
        dataUrl += "";
        break;
      case "inside":
        dataUrl += "/domicile";
        break;
      case "outside":
        dataUrl += "/exterieur";
        break;

      default:
        break;
    }
    const _data = await fetchDataSvc(dataUrl);
    setData(_data);
  };
  return (
    <div className="prose max-w-none p-5">
      <h1>Statistique par equipe :</h1>
      <div className="flex gap-14">
        <button
          className={`${
            mainTab === "general" && "bg-neutral-300 font-bold"
          }  px-4 py-2`}
          onClick={() => {
            setMainTab("general");
            setSubTab("general");
            handleRefetchData("general", "general");
          }}
        >
          Generale
        </button>
        <button
          className={`${
            mainTab === "defense" && "bg-neutral-300 font-bold"
          }  px-4 py-2`}
          onClick={() => {
            setMainTab("defense");
            setSubTab("general");
            handleRefetchData("defense", "general");
          }}
        >
          Defense
        </button>
        <button
          className={`${
            mainTab === "attack" && "bg-neutral-300 font-bold"
          }  px-4 py-2`}
          onClick={() => {
            setMainTab("attack");
            setSubTab("general");
            handleRefetchData("attack", "general");
          }}
        >
          Attaque
        </button>
      </div>
      <div className="flex gap-5 mt-5">
        <button
          className={`${
            subTab === "general" && "bg-neutral-300 font-bold"
          }  px-4 py-2`}
          onClick={() => {
            setSubTab("general");
            handleRefetchData(mainTab, "general");
          }}
        >
          Generale
        </button>
        <button
          className={`${
            subTab === "inside" && "bg-neutral-300 font-bold"
          }  px-4 py-2`}
          onClick={() => {
            setSubTab("inside");
            handleRefetchData(mainTab, "inside");
          }}
        >
          Interieur
        </button>
        <button
          className={`${
            subTab === "outside" && "bg-neutral-300 font-bold"
          }  px-4 py-2`}
          onClick={() => {
            setSubTab("outside");
            handleRefetchData(mainTab, "outside");
          }}
        >
          Exterieur
        </button>
      </div>
      {(() => {
        switch (mainTab) {
          case "general":
            return (
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 border">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Equipe
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Competition
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Buts
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Tir pm
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Discipline
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Possession
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Passe reussites
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Aeriens Gagnes
                      </th>
                      <th scope="col" className="px-6 py-3">
                        note
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, key) => {
                      return (
                        <tr className="bg-white border-b " key={key}>
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                          >
                            {item.nomEquipe}
                          </th>
                          <td className="px-6 py-4">{item.nomCompetition}</td>
                          <td className="px-6 py-4">{item.buts}</td>
                          <td className="px-6 py-4">{item.tirsCAPm}</td>
                          <td className="px-6 py-4">
                            {item.carteJaune} , {item.carteRouge}
                          </td>
                          <td className="px-6 py-4">{item.possession}</td>
                          <td className="px-6 py-4">{item.passesReussies}</td>
                          <td className="px-6 py-4">{item.AeriensGagnes}</td>
                          <td className="px-6 py-4">{item.note}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            );
          case "defense":
            return (
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 border">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Equipe
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Competition
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Buts
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Tir pm
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Tacle pm
                      </th>
                      <th scope="col" className="px-6 py-3">
                        interception pm
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Faute pm
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Hors jeu pm
                      </th>
                      <th scope="col" className="px-6 py-3">
                        note
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, key) => {
                      return (
                        <tr className="bg-white border-b " key={key}>
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                          >
                            {item.nomEquipe}
                          </th>
                          <td className="px-6 py-4">{item.nomCompetition}</td>
                          <td className="px-6 py-4">{item.buts}</td>
                          <td className="px-6 py-4">{item.tirsPmDefense}</td>
                          <td className="px-6 py-4">tacle</td>
                          <td className="px-6 py-4">{item.interceptionsPm}</td>
                          <td className="px-6 py-4">{item.fautesPm}</td>
                          <td className="px-6 py-4">{item.horsJeuxPm}</td>
                          <td className="px-6 py-4">{item.note}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            );
          case "attack":
            return (
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 border">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Equipe
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Competition
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Buts
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Tir pm
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Tir CA pm
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Dribles pm
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Fautes subies pm
                      </th>
                      <th scope="col" className="px-6 py-3">
                        note
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, key) => {
                      return (
                        <tr className="bg-white border-b " key={key}>
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                          >
                            {item.nomEquipe}
                          </th>
                          <td className="px-6 py-4">{item.nomCompetition}</td>
                          <td className="px-6 py-4">{item.buts}</td>
                          <td className="px-6 py-4">{item.tirsPmAttaque}</td>
                          <td className="px-6 py-4">{item.tirsCAPm}</td>
                          <td className="px-6 py-4">{item.driblesPm}</td>
                          <td className="px-6 py-4">{item.fautesSubiesPm}</td>
                          <td className="px-6 py-4">{item.note}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            );

          default:
            return null;
        }
      })()}
    </div>
  );
};

export default TeamStat;
