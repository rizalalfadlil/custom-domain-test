import { Skilldivider } from "../components/skilldivider";
import React, { useState } from "react";
import { Check, CheckBox, CheckBoxOutlineBlank } from "@mui/icons-material";
import { Skill } from "../components/skillcard";
import { motion } from "framer-motion";

const SkillPage = (props) => {
  const [showAll, setShowAll] = useState(false);
  const changeShow = () => setShowAll(!showAll);

  const { lang } = props;

  const enTitle = (
    <>
      <p className="text-slate-200 font-bold text-2xl md:text-4xl xl:text-7xl mb-4">
        My <span className="text-sky-300">Skills</span>
      </p>
      <p className="text-blue-300  text-lg md:text-xl xl:text-2xl mb-8">
        All of the programming language or other that I have learn or mastered.
      </p>
    </>
  );
  const idTitle = (
    <>
      <p className="text-slate-200 font-bold text-2xl md:text-4xl xl:text-7xl mb-4">
        <span className="text-sky-300">Keahlian </span>Saya
      </p>
      <p className="text-blue-300 text-lg md:text-xl xl:text-2xl mb-8">
        Semua bahasa pemrograman yang sedang saya pelajari atau sudah saya
        kuasai
      </p>
    </>
  );
  return (
    <section className="h-lvh h-fit mb-48 sm:mb-0 md:h-full bg-slate-900 grid md:grid-cols-2">
      <div className="md:h-screen bg-slate-900 justify-items-center items-center grid">
        <motion.div 
        initial={{opacity:0, y:-200}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:1}}
        className="w-4/5 xl:w-1/2">
          {lang === "id" ? idTitle : enTitle}
        </motion.div>
      </div>
      <div className="h-auto bg-slate-900 justify-items-center md:items-center grid">
        <div className=" 2xl:w-3/4 lg:w-full w-5/6 h-5/6 md:h-2/3">
          <div className="relative h-2/3 sm:h-3/4 lg:h-full">
            <div className="absolute w-full h-16 bg-gradient-to-b from-slate-900 top-0"></div>
            <div className="absolute w-full h-16 bg-gradient-to-t from-slate-900 bottom-0"></div>
            <motion.div 
            initial={{opacity:0, y:200}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:1}}
            className="rounded-xl  overflow-y-scroll h-full bg-opacity-20 grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 content-center p-4 mt-8 gap-6 ">
              <Skilldivider title="language" />
              <Skill
                icon="https://img.icons8.com/fluency/48/javascript.png"
                title="Javascript"
              />
              <Skill
                icon="https://img.icons8.com/color/96/typescript.png"
                title="Typescript"
              />
              <Skill
                icon="https://img.icons8.com/color/96/c-sharp-logo.png"
                title="C Sharp"
              />
              <Skill
                icon="https://img.icons8.com/color/96/java-coffee-cup-logo--v1.png"
                title="Java"
              />
              <Skill
                icon="https://img.icons8.com/officel/160/php-logo.png"
                title="PHP"
              />
              <Skill
                icon="https://img.icons8.com/color/96/kotlin.png"
                title="Kotlin"
              />
              <Skilldivider title="framework" />
              <Skill
                icon="https://img.icons8.com/color/96/000000/react-native.png"
                title="React.js"
              />
              <Skill
                icon="https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/external-codeigniter-is-an-open-source-software-rapid-development-web-framework-logo-color-tal-revivo.png"
                title="Code igniter"
              />
              <Skill
                icon="https://laravel.com/img/logomark.min.svg"
                title="Laravel"
              />
              <Skill
                icon="./nextlogo.svg"
                title="Next.js"
              />
              <Skill
                icon="https://img.icons8.com/color/96/vue-js.png"
                title="Vue.js"
              />
              <Skilldivider title="basic language" />
              <Skill
                icon="https://img.icons8.com/color/96/html-5--v1.png"
                title="html"
              />
              <Skill
                icon="https://img.icons8.com/color/96/css3.png"
                title="css"
              />
              <Skill
                icon="https://img.icons8.com/color/96/postgreesql.png"
                title="postgreSql"
              />
              <Skill
                icon="https://img.icons8.com/color/96/mysql-logo.png"
                title="mySql"
              />
                <Skilldivider title="IDE"/>
              <Skill
                icon="https://img.icons8.com/color/96/visual-studio-code-2019.png"
                title="VS Code"
              />
              <Skill
                icon="https://img.icons8.com/color/96/android-studio--v3.png"
                title="Android Studio"
              />
              <Skill
                icon="https://img.icons8.com/color/96/unity.png"
                title="Unity"
              />
              <Skilldivider title="Other"/>
              <Skill
                icon="https://img.icons8.com/ios-glyphs/30/github.png"
                title="Github"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillPage;
