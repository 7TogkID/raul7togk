"use client";

import React, {
   createContext,
   useState,
   useContext,
   useEffect,
   Dispatch,
   SetStateAction,
} from "react";
import { Project } from "./interfaces";
import { filter } from "framer-motion/client";

interface ProjectContextProps {
   projects: Project[];
   appliedFilter: string;
   filteredProjects: Project[];
   sort: boolean;
   setAppliedFilter: Dispatch<SetStateAction<string>>;
   setFilteredProjects: Dispatch<SetStateAction<Project[]>>;
   setSort: Dispatch<SetStateAction<boolean>>;
   singleProject: Project | null;
   setSingleProject: Dispatch<SetStateAction<Project | null>>;
}

const ProjectsContext = createContext<ProjectContextProps>({
   projects: [] as Project[],
   appliedFilter: "all",
   filteredProjects: [] as Project[],
   sort: false,
   setAppliedFilter: () => {},
   setFilteredProjects: () => {},
   setSort: () => {},
   singleProject: null,
   setSingleProject: () => {},
});

// ProjectsProvider component to manage and expose context values
const ProjectsProvider = ({
   children,
   data,
}: {
   children: React.ReactNode;
   data: Project[];
}) => {
   const [projects, setProjects] = useState(data);
   const [appliedFilter, setAppliedFilter] = useState("all");
   const [filteredProjects, setFilteredProjects] = useState(data);
   const [sort, setSort] = useState(false);
   const [singleProject, setSingleProject] = useState<Project | null>(null);

   useEffect(() => {
      const filtered = applyFilters(projects, appliedFilter);
      setFilteredProjects(filtered);
   }, [appliedFilter, projects]);

   const applyFilters = (data: Project[], filterValues: string) => {
      if (filterValues === "all") {
         return data;
      }

      return data.filter((project) =>
         project.category && project.category.trim().toLowerCase() === filterValues.toLowerCase()
      );
   };

   const value = {
      projects,
      appliedFilter,
      filteredProjects,
      sort,
      setAppliedFilter,
      setFilteredProjects,
      setSort,
      singleProject,
      setSingleProject,
   };

   return (
      <ProjectsContext.Provider value={value}>
         {children}
      </ProjectsContext.Provider>
   );
};

// Custom hook to consume the ProjectsContext
const useProjects = () => {
   const context = useContext(ProjectsContext);
   if (context === undefined) {
      throw new Error("useProjects must be used within a ProjectsProvider");
   }
   return context;
};

export { ProjectsProvider, useProjects };
