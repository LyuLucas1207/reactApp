import React from 'react';
import { Link, useParams, useSearchParams } from "react-router-dom";
import '../../css/Article/style.css';
const Article = () => {
    const [searchParams] = useSearchParams();
    const params = useParams();

    // 优先从路径参数中获取 id，如果没有则从查询参数中获取
    const id = params.id || searchParams.get('id');
    const name = params.name || searchParams.get('name');

    return (
        <div className="article-container">
            <h1 className="article-title">Article Details</h1>
            <div className="article-details">
                <p className="article-info"><strong>ID:</strong> {id}</p>
                <p className="article-info"><strong>Name:</strong> {name}</p>
                <p className="article-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula, quam nec pulvinar aliquet, nisl lacus fermentum lorem, 
                    non ullamcorper libero eros ac purus. Sed tempor, magna at suscipit accumsan, justo magna elementum mi, vel scelerisque quam enim id nunc. 
                    Vivamus nec est id risus egestas efficitur. Proin dictum mi at orci varius, eget volutpat nisl tincidunt.
                </p>
            </div>
            <div className="article-actions">
                <Link className="article-link" to="/login">Go to Login</Link>
            </div>
        </div>
    );
};

export default Article;
