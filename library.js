{
    "semrush": [
        {
            "usage": "Organic history for a domain",
            "formula": "DOMAIN_OVERVIEW_SEMRUSH(domain,db,excludeHeaders,date)",
            "example": "DOMAIN_OVERVIEW_SEMRUSH(\"example.com\",\"us\",false,201601)"
        },
        {
            "usage": "Organic keywords for a domain",
            "formula": "DOMAIN_ORGANIC_KEYWORDS_SEMRUSH(domain, filterBy, matchType, query, limit, db, excludeHeaders, date)",
            "example": "DOMAIN_ORGANIC_KEYWORDS_SEMRUSH(\"example.com\", true, true, \"apartments\", 10, \"us\", true, 201601)"

        },
        {
            "usage": "Organic keywords per URL",
            "formula": "URL_ORGANIC_KEYWORDS_SEMRUSH(url, excludeHeaders, limit, db)",
            "example": "URL_ORGANIC_KEYWORDS_SEMRUSH(\"http://example.com\", true, \"10\", \"us\")"

        },
        {
            "usage": "Keyword Difficulty for a keyword",
            "formula": "KEYWORD_DIFFICULTY_SEMRUSH(query, excludeHeaders, db)",
            "example": "KEYWORD_DIFFICULTY_SEMRUSH(\"aparments\", false, \"us\")"

        },
        {
            "usage": "Google search results for a keyword",
            "formula": "SERPS_SEMRUSH(query, limit, db)",
            "example": "SERPS_SEMRUSH(\"apartments\", 10, \"us\")"

        },
        {
            "usage": "Related keywords for a keyword",
            "formula": "RELATED_QUERIES_SEMRUSH(query, excludeHeaders, limit, db)",
            "example": "RELATED_QUERIES_SEMRUSH(\"apartments\", false, 10, \"us\")"

        },
        {
            "usage": "Search volume for a keyword",
            "formula": "KEYWORD_VOLUME_SEMRUSH(query, excludeHeaders, db)",
            "example": "KEYWORD_VOLUME_SEMRUSH(\"apartments\", false, \"us\")"
        }
    ],

        "sistrix": [{
            "usage": "Visibility Index",
            "formula": "VISIBILITY_INDEX_SISTRIX (type,url,country,mobile,date,history,excludeHeaders)",
            "example": "VISIBILITY_INDEX_SISTRIX (type,url,country,mobile,date,history,excludeHeaders)"

        },
        {
            "usage": "Number of indexed pages",
            "formula": "INDEXED_PAGES_SISTRIX(type, url, history, excludeHeaders)",
            "example": "INDEXED_PAGES_SISTRIX(\"domain\", \"example.com\", true, true)"

        },
        {
            "usage": "Keywords in top 10 Google serps for domain",
            "formula": "DOMAIN_KEYWORD_COUNT_TOP_10_SISTRIX(type, url, country, mobile, date, history, excludeHeaders)",
            "example": "DOMAIN_KEYWORD_COUNT_TOP_10_SISTRIX(\"domain\", \"example.com\", \"us\", true, 2016-09-15, true, true)"
        },
        {
            "usage": "All Keywords in Google serps for domain",
            "formula": "DOMAIN_KEYWORD_COUNT_SISTRIX(type,url,country,mobile,date,history,excludeHeaders)",
            "example": "DOMAIN_KEYWORD_COUNT_SISTRIX(\"domain\", \"example.com\", \"us\", true, 2016-09-15, true, true)"
        },
        {
            "usage": "Find age of domain",
            "formula": "DOMAIN_AGE_SISTRIX(domain, true)",
            "example": "DOMAIN_AGE_SISTRIX(\"example.com\", true)"
        },
        {
            "usage": "Find keyword opportunities for domain",
            "formula": "DOMAIN_OPPORTUNITIES_SISTRIX(type, url, country, mobile, limit, offset, excludeHeaders)",
            "example": "DOMAIN_OPPORTUNITIES_SISTRIX(\"domain\", \"example.com\", \"us\", true, 10, true, true)"
        },
        {
            "usage": "Find keyword ideas for domain",
            "formula": "DOMAIN_IDEAS_SISTRIX(type, url, country, mobile, limit, offset, excludeHeaders)",
            "example": "DOMAIN_IDEAS_SISTRIX(\"domain\", \"example.com\", \"us\", true, 10, true, true)"
        },
        {
            "usage": "Find SEO Competitors",
            "formula": "DOMAIN_COMPETITORS_SEO_SISTRIX(type, url, country, num, excludeHeaders)",
            "example": "DOMAIN_COMPETITORS_SEO_SISTRIX(\"domain\", \"example.com\", \"us\", 10, true)"
        },
        {
            "usage": "Find SEM Competitors",
            "formula": "DOMAIN_COMPETITORS_SEM_SISTRIX(type, url, country, num, excludeHeaders)",
            "example": "DOMAIN_COMPETITORS_SEM_SISTRIX(\"domain\", \"example.com\", \"us\", 10, true)"
        }


        ]



}



