import "vuetify/styles";

import {
  createVuetify,
  // ThemeDefinition
} from "vuetify";
import { md2 } from "vuetify/blueprints";
import { aliases, mdi } from "vuetify/iconsets/mdi-svg";

import { light2, dark } from "@/assets/themes";

import {
  IconBrasno,
  IconGlobeKantar,
  IconKorpaKantar,
  IconKuhinja,
  IconLogoKantar,
  IconLogoKantarH,
  IconMed,
  IconMeso,
  IconMlecno,
  IconPice,
  IconRiba,
  IconSokovi,
  IconSrbija,
  IconUlje,
  IconVocePovrce,
  IconZacin,
  IconZimnica,
} from "@/components/icons/kantar-rs";

import {
  IconLink,
  IconPlusCircle,
  IconCheckbox,
  IconCheckboxBlank,
  IconBoxes,
  IconPalleteFull,
  IconOwnerFilled,
  IconDeliveryTruck,
  IconBookOpen,
  IconHeadphone,
  IconLocationFilled,
  IconDowntown,
  IconAdjustSettings,
  IconAttach,
  IconBox,
  IconChatBubbleOutline,
  IconChatDotsOutlined,
  IconCheck,
  IconDashboardFilled,
  IconDial,
  IconDotsVertical,
  IconEditNoteOutlined,
  IconEnvelopeOutlined,
  IconGithubOutlined,
  IconHelpSquareFilled,
  IconHomeFilled,
  IconIdCardCompanyOutlined,
  IconJournalOutline,
  IconKey,
  IconLockOpenOutline,
  IconMagnifyingGlasLight,
  IconMenu,
  IconPaperPlaeOutline,
  IconPeopleFilled,
  IconPersonAddOutline,
  IconPersonFilled,
  IconPersonRemoveOutline,
  IconPowerOff,
  IconRedEye,
  IconSaveFilled,
  IconShareFilled,
  IconShareOffFilled,
  IconShoppingCartOutline,
  IconStore,
  IconStoreFrontOutlined,
  IconTagOutlined,
  IconTaskAddOutline,
  IconTaskEditOutlined,
  IconTaskShareOutlined,
  IconTextDescription,
  IconTodoOutline,
  IconTrashFill,
  IconUserCircle,
  IconUserShield,
} from "@/components/icons";

// # --default-light-theme
// const demoLightTheme: ThemeDefinition = {
//   dark: false,
//   colors: {
//     background: '#FFFFFF',
//     surface: '#FFFFFF',
//     primary: '#6200EE',
//     secondary: '#03DAC6',
//     error: '#B00020',
//     info: '#2196F3',
//     success: '#4CAF50',
//     warning: '#FB8C00',
//   }
// };

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    blueprint: md2,

    // @useDisplay composable configuration options
    // https://next.vuetifyjs.com/en/features/display-and-platform/#interface
    // display: {
    //   mobileBreakpoint: "sm",
    //   thresholds: {
    //     xs: 0,
    //     sm: 340,
    //     md: 540,
    //     lg: 800,
    //     xl: 1280,
    //   },
    // },

    // https://next.vuetifyjs.com/en/features/theme/
    // https://next.vuetifyjs.com/en/features/theme/#theme-object-structure
    theme: {
      // defaultTheme: "dark",
      // defaultTheme: "light2",
      themes: {
        light2,
        dark,
      },
      variations: {
        colors: [
          "primary",
          "secondary",
          "success",
          "info",
          "warning",
          "error",
          "primary2",
          "primary3",
          "accent1",
          "accent2",
          "complement",
        ],
        lighten: 2,
        darken: 2,
      },
    },

    // aliases: {
    //   MyButton: VBtn,
    //   MyButtonAlt: VBtn,
    // },

    // @@ set component/alias props
    defaults: {
      global: {
        ripple: true,
      },
      // VSheet: {
      //   elevation: 2,
      // },
      VBtn: {
        color: "secondary",
        variant: "flat",
      },
      // VTextField: {
      //   "center-affix": true,
      // },

      // MyButton: {
      //   color: 'primary',
      //   variant: 'tonal',
      // },
      // VCard: {
      //   MyButton: { color: 'secondary' },
      //   VBtn: { color: 'primary' },
      // },
      // <CustomComponent>: {
      //   "foo:1": "bar",
      // },

      VCol: {
        cols: 12,
      },
    },

    icons: {
      defaultSet: "mdi",
      aliases: {
        ...aliases,
        // # override
        menu: IconMenu,
        // # add: <VIcon icon="$other">
        // # @icons:kantar.rs
        iconBrasno: IconBrasno,
        iconGlobeKantar: IconGlobeKantar,
        iconKorpaKantar: IconKorpaKantar,
        iconKuhinja: IconKuhinja,
        iconLogoKantar: IconLogoKantar,
        iconLogoKantarH: IconLogoKantarH,
        iconMed: IconMed,
        iconMeso: IconMeso,
        iconMlecno: IconMlecno,
        iconPice: IconPice,
        iconRiba: IconRiba,
        iconSokovi: IconSokovi,
        iconSrbija: IconSrbija,
        iconUlje: IconUlje,
        iconVocePovrce: IconVocePovrce,
        iconZacin: IconZacin,
        iconZimnica: IconZimnica,
        //
        iconLink: IconLink,
        iconPlusCircle: IconPlusCircle,
        iconCheckboxOn: IconCheckbox,
        iconCheckboxOff: IconCheckboxBlank,
        iconBoxes: IconBoxes,
        iconPalleteFull: IconPalleteFull,
        iconOwner: IconOwnerFilled,
        iconAdjustSettings: IconAdjustSettings,
        iconAttach: IconAttach,
        iconBook: IconBookOpen,
        iconBox: IconBox,
        iconChat: IconChatBubbleOutline,
        iconChatDots: IconChatDotsOutlined,
        iconCheck: IconCheck,
        iconDashboard: IconDashboardFilled,
        iconDeliveryTruck: IconDeliveryTruck,
        iconDescription: IconTextDescription,
        iconDial: IconDial,
        iconDotsV: IconDotsVertical,
        iconDowntown: IconDowntown,
        iconEditNote: IconEditNoteOutlined,
        iconEnvelope: IconEnvelopeOutlined,
        iconGithub: IconGithubOutlined,
        iconHelp: IconHelpSquareFilled,
        iconHome: IconHomeFilled,
        iconIdCardCompany: IconIdCardCompanyOutlined,
        iconJournal: IconJournalOutline,
        iconKey: IconKey,
        iconLocation: IconLocationFilled,
        iconLock: IconLockOpenOutline,
        iconMagnifyingGlass: IconMagnifyingGlasLight,
        iconPaperPlane: IconPaperPlaeOutline,
        iconPeople: IconPeopleFilled,
        iconPerson: IconPersonFilled,
        iconPersonAdd: IconPersonAddOutline,
        iconPersonRemove: IconPersonRemoveOutline,
        iconPhone: IconHeadphone,
        iconPowerOff: IconPowerOff,
        iconRedEye: IconRedEye,
        iconSave: IconSaveFilled,
        iconShare: IconShareFilled,
        iconShareOff: IconShareOffFilled,
        iconShoppingCart: IconShoppingCartOutline,
        iconStore: IconStore,
        iconStoreFront: IconStoreFrontOutlined,
        iconTag: IconTagOutlined,
        iconTaskEdit: IconTaskEditOutlined,
        iconTasksAdd: IconTaskAddOutline,
        iconTaskShare: IconTaskShareOutlined,
        iconTodo: IconTodoOutline,
        iconTrash: IconTrashFill,
        iconUserCircle: IconUserCircle,
        iconUserShield: IconUserShield,
      },
      sets: {
        mdi,
      },
    },
    // locale: {
    //   locale: 'zhHans',
    //   fallback: 'sv',
    //   messages: { zhHans, pl, sv }
    // }
  });
  // @@
  nuxtApp.vueApp.use(vuetify);
});

// interface IconAliases {
//   [name: string]: IconValue;
//   calendar: IconValue;
//   cancel: IconValue;
//   checkboxIndeterminate: IconValue;
//   checkboxOff: IconValue;
//   checkboxOn: IconValue;
//   clear: IconValue;
//   close: IconValue;
//   complete: IconValue;
//   delete: IconValue;
//   delimiter: IconValue;
//   dropdown: IconValue;
//   edit: IconValue;
//   error: IconValue;
//   expand: IconValue;
//   file: IconValue;
//   first: IconValue;
//   info: IconValue;
//   last: IconValue;
//   loading: IconValue;
//   menu: IconValue;
//   minus: IconValue;
//   next: IconValue;
//   plus: IconValue;
//   prev: IconValue;
//   radioOff: IconValue;
//   radioOn: IconValue;
//   ratingEmpty: IconValue;
//   ratingFull: IconValue;
//   ratingHalf: IconValue;
//   sortAsc: IconValue;
//   sortDesc: IconValue;
//   subgroup: IconValue;
//   success: IconValue;
//   unfold: IconValue;
//   warning: IconValue;
// }
