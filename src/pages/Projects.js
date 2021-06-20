import { Helmet } from "react-helmet";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Sectiontitle from "../components/Sectiontitle";
import Layout from "../components/Layout";
import Pagination from "../components/Pagination";
import PortfoliosView from "../components/PortfoliosView";

function Projects() {
  const [projects, setPortfoios] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage] = useState(9);

  useEffect(() => {
    let mounted = true;
    axios.get("/api/projects").then((response) => {
      if (mounted) {
        setPortfoios(response.data);
      }
    });
    return () => (mounted = false);
  }, [projects]);

  const indexOfLastPortfolios = currentPage * projectsPerPage;
  const indexOfFirstPortfolios = indexOfLastPortfolios - projectsPerPage;
  const currentPortfolios = projects.slice(
    indexOfFirstPortfolios,
    indexOfLastPortfolios
  );

  const paginate = (e, pageNumber) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };

  return (
    <Layout>
      <Helmet>
        <title>Projects - Naveen Kolambage</title>
        <meta
          name="description"
          content="Chester React Personal Portfolio Template Portfolios Page"
        />
      </Helmet>
      <div className="mi-about mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <Sectiontitle title="Projects" />
          {<PortfoliosView projects={currentPortfolios} />}
          {!(projects.length > projectsPerPage) ? null : (
            <Pagination
              className="mt-50"
              itemsPerPage={projectsPerPage}
              totalItems={projects.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Projects;
