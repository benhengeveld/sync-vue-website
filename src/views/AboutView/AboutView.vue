<template>
  <DefaultPageTemplate :crtOverlay="true" :glitchNav="false">
    <CardItem>
      <h1 class="card-title">My Skills</h1>
      <div class="svg-holder" id="svg-icons">
        <SvgIcon
          v-for="icon in icons"
          :key="icon.fileName"
          :src="icon.fileName"
          :tooltipText="icon.name"
          :glitch="false"
        />
      </div>
    </CardItem>

    <CardItem>
      <h1 class="card-title">My Stuff</h1>
      <div class="svg-holder" id="svg-links">
        <SvgLink
          v-for="link in links"
          :key="link.fileName"
          :src="link.fileName"
          :href="link.link"
          :glitch="false"
        />
      </div>
    </CardItem>
  </DefaultPageTemplate>
</template>

<script setup lang="ts">
import DefaultPageTemplate from "@/templates/DefaultPageTemplate.vue";
import CardItem from "@/components/CardItem.vue";
import SvgIcon from "./components/SvgIcon.vue";
import SvgLink from "./components/SvgLink.vue";

const icons: { name: string; fileName: string }[] = [
  { fileName: "angular", name: "Angular" },
  { fileName: "apachecordova", name: "Cordova" },
  { fileName: "aspdotnet", name: "ASP.NET" },
  { fileName: "csharp", name: "C#" },
  { fileName: "css3", name: "CSS" },
  { fileName: "git", name: "Git" },
  { fileName: "html5", name: "HTML" },
  { fileName: "java", name: "Java" },
  { fileName: "javascript", name: "JavaScript" },
  { fileName: "nodedotjs", name: "Node.js" },
  { fileName: "react", name: "React" },
  { fileName: "sass", name: "Sass" },
  { fileName: "sql", name: "SQL" },
  { fileName: "typescript", name: "TypeScript" },
  { fileName: "vuedotjs", name: "Vue" },
  { fileName: "yarn", name: "Yarn" },
];

const links: { fileName: string; link: string }[] = [
  { fileName: "github", link: "https://github.com/benhengeveld" },
  { fileName: "linkedin", link: "https://www.linkedin.com/in/ben-hengeveld" },
  { fileName: "email", link: "mailto:contact@sy-nc.ca" },
];
</script>

<style lang="scss">
#svg-icons {
  gap: 1em;

  .svg {
    width: 5.5em;
  }

  .svg:hover .svg-tooltip {
    visibility: visible;
  }
}

#svg-links {
  gap: 3em;

  .svg {
    width: 8em;
  }
}

.svg-holder {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.svg {
  display: inline-block;
  position: relative;
  img {
    filter: invert(100%);
  }
}

.svg-tooltip {
  visibility: hidden;
  background-color: black;
  color: white;
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
  padding: 0.3em 0.8em;
  border-radius: 0.4em;

  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -120%);
  z-index: 1;
}
</style>
