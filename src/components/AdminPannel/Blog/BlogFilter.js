import React from "react";

const BlogFilter = ({ setSearchQuery, setSelectedCategory ,title }) => {
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleCategoryFilter = (event) => {
    setSelectedCategory(event.target.value);
  };
  return (
    <div className="breadcrumb-area">
      <div className="container  breadcrumb-container">
        <div className="blog-filter">
          <h1 className="page-title ">{title}</h1>

          <div className="blog-filter-options">
            <div>
              <label htmlFor="categories">Categories</label>
              <select
                id="categories"
                className="filter-option"
                onChange={handleCategoryFilter}
              >
                <option value="AllCategories">All categories</option>
                <option value="Artifical Intelligence">
                Artifical Intelligence
                </option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Onsite SEO">Onsite SEO</option>
                <option value="Social Media">Social Media</option>
              </select>
            </div>
            <div>
              <label htmlFor="topics">Topics</label>
              <select id="topics" className="filter-option">
                <option value="Alltopics">All topics</option>
              </select>
            </div>
            <div>
              <label htmlFor="search">Search</label>
              <input
                placeholder="search here"
                className="filter-option"
                id="search"
                onChange={handleSearch}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogFilter;
