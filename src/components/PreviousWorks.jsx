import React from "react";

const tableData = [
  { sl: 1, site: "MAR THOMA CHERIYAPALLY- CONVENTION CENTRE", location: "KOTHAMANGALAM", ton: "230 TR" },
  { sl: 2, site: "MAR THOMA CHERIYAPALLY - MINI AUDITORIUM", location: "KOTHAMANGALAM", ton: "50 TR" },
  { sl: 3, site: "ST GEORGE CATHEDERAL AUDITORIUM", location: "KOTHAMANGALAM", ton: "90 TR" },
  { sl: 4, site: "HOLY MAGI CHUCH AUDITORIUM", location: "MUVATTUPUZHA", ton: "90 TR" },
  { sl: 5, site: "ST MARYS JACOBITE SYRIAN VALLIVALLY AUDITORIUM", location: "THAMARACHAL", ton: "134 TR" },
  { sl: 6, site: "ST MARYS BASILICA CHURCH AUDITORIUM", location: "KOCHI", ton: "120 TR" },
  { sl: 7, site: "ST GEORGE CHURCH AUDITORIUM", location: "ERNAKULAM", ton: "87 TR" },
  { sl: 8, site: "ST MARYS CHURCH AUDITORIUM", location: "KURUPUMPADY", ton: "105 TR" },
  { sl: 9, site: "KALA AUDITORIUM", location: "KOTHAMANGALAM", ton: "85 TR" },
  { sl: 10, site: "MAR BASELIOUS DENTAL COLLEGE", location: "THANKALAM", ton: "90 TR" },
  { sl: 11, site: "MAR BASELIOUS MEDICAL MISSION HOSPITAL", location: "KOTHAMANGALAM", ton: "350 TR" },
  { sl: 12, site: "SANJOE CONVENTION CENTRE", location: "PATTIMATTAM", ton: "94 TR" },
  { sl: 13, site: "EVM ANN CINEMAS", location: "KOTHAMANGALAM", ton: "120 TR" },
  { sl: 14, site: "CENTRAL PICTURES", location: "KOTTAYAM, CHANGANASSERY", ton: "120 TR" },
  { sl: 15, site: "SKYLINE APARTMENTS - VRF", location: "KOCHI", ton: "860 HP" },
  { sl: 16, site: "PREMIUM HONDA", location: "KOTTAYAM, PALA", ton: "90 TR" },
  { sl: 17, site: "MATHA MOVIES", location: "ADIMALI", ton: "35 TR" },
  { sl: 18, site: "LETHA MOVIES", location: "MUVATTUPUZHA", ton: "60 TR" },
  { sl: 19, site: "EVM CINEMAS", location: "MATTANCHERY", ton: "44 TR" },
  { sl: 20, site: "HOTEL MARIA INTERNATIONAL", location: "KOTHAMANGALAM", ton: "180 TR" },
  { sl: 21, site: "SILVER TIPS", location: "KOTHAMANGALAM", ton: "210 TR" },
  { sl: 22, site: "EVM HOTEL", location: "MUNNAR, RAJAKKAD", ton: "160 TR" },
  { sl: 23, site: "ALLOVEDA HEALTH CARE", location: "KURUPUMPADY", ton: "45 TR" },
  { sl: 24, site: "ST THERESA COLLEGE AUDITORIUM", location: "ERNAKULAM", ton: "62 TR" },
  { sl: 25, site: "PORT TRUST - VRF", location: "KOCHI", ton: "18 HP" },
  { sl: 26, site: "LITTLE FLOWER HOSPITAL", location: "ANGAMALY", ton: "162 TR" },
  { sl: 27, site: "ST THOMAS HOSPITAL", location: "KOTHAMANGALAM", ton: "88 TR" },
  { sl: 28, site: "SACRED HEART PROVINCIAL HOUSE", location: "ALUVA", ton: "124 TR" },
  { sl: 29, site: "NIRMALA COLLEGE", location: "MUVATTUPUZHA", ton: "120 TR" },
  { sl: 30, site: "RAJAGIRI COLLEGE", location: "KOCHI", ton: "120 TR" },
  { sl: 31, site: "PAREL CHURCH AUDITORIUM", location: "KOCHI", ton: "90 TR" },
  { sl: 32, site: "ST JOSEPH CHURCH AUDITORIUM", location: "THODUPUZHA", ton: "94 TR" },
  { sl: 33, site: "KCC AUDITORIUM", location: "KOTHAMANGALAM", ton: "110 TR" },
  { sl: 34, site: "RAJADHANI INSTITUTE OF TECHNOLOGY", location: "ATTINGAL", ton: "120 TR" },
  { sl: 35, site: "CHURCH AUDITORIUM", location: "VENGOLA", ton: "60 TR" },
  { sl: 36, site: "LIONS CLUB AUDITORIUM", location: "MUVATTUPUZHA", ton: "55 TR" },
  { sl: 37, site: "HOTEL SEAPORT", location: "KAKKANAD", ton: "84 TR" },
  { sl: 38, site: "KOTHAMANGALAM MUNICIPALITY HALL", location: "KOTHAMANGALAM", ton: "64 TR" },
  { sl: 39, site: "MARIAN SCHOOL", location: "KOTHAMANGALAM", ton: "70 TR" },
  { sl: 40, site: "MGM SCHOOL", location: "KOCHI", ton: "88 TR" },
  { sl: 41, site: "HOLY FAMILY CHURCH", location: "KOTHAMANGALAM", ton: "60 TR" },
  { sl: 42, site: "ST THOMAS CHURCH", location: "MUVATTUPUZHA", ton: "75 TR" },
  { sl: 43, site: "HOLY CROSS CHURCH", location: "VENGOLA", ton: "50 TR" },
  { sl: 44, site: "ASSISI VIDYANIKETAN SCHOOL", location: "KAKKANAD", ton: "72 TR" }
];


const PreviousWorks = () => {
  return (
    <section className="bg-accent-2 py-12 px-4 font-sans">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-heading text-primary mb-6 text-center">Previous Works Done</h2>
        <div className="overflow-x-auto rounded-2xl shadow-lg">
          <table className="min-w-full text-sm text-left bg-white rounded-2xl">
            <thead className="bg-primary text-white font-semibold text-base">
              <tr>
                <th className="py-3 px-4">Sl.No</th>
                <th className="py-3 px-4">Site Description</th>
                <th className="py-3 px-4">Location</th>
                <th className="py-3 px-4">TR/HP</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item, idx) => (
                <tr
                  key={idx}
                  className={idx % 2 === 0 ? "bg-accent-1" : "bg-white"}
                >
                  <td className="py-3 px-4">{item.sl}</td>
                  <td className="py-3 px-4">{item.site}</td>
                  <td className="py-3 px-4">{item.location}</td>
                  <td className="py-3 px-4">{item.ton}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default PreviousWorks;
