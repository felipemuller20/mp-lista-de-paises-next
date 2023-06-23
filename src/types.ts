export type Country = {
  name: {
    common: string;
    official: string;
  };
  flags: {
    png: string;
  };
  translations: {
    por: {
      common: string;
    };
  };
};

export type Borders = {
  name: string;
  flag: string;
  official: string;
};
