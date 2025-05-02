"use client";
import {ConnectorImageApi} from "@/app/services/connector.service";
import Image from "next/image";
import React, {useState, useEffect} from "react";

interface Category {
    id: string;
    CategoryList: string;
    name?: string;
    description?: string;
}

interface ConnectorImage {
    id: string;
    ImageText?: string;
    ImageTitle?: string;
    CategoryType?: string;
    Image?: {
        url: string;
    };
}

interface ConnectorFilterSectionProps {
    catogeoryList: Category[];
    imageList: ConnectorImage[];
}

const ConnectorFilterSection: React.FC<ConnectorFilterSectionProps> = ({catogeoryList, imageList}) => {
    const [imageData, setImageData] = useState<ConnectorImage[]>(imageList);
    const [categoryType, setCategoryType] = useState<string>("");
    const [imageFlag, setImageFlag] = useState(false);
    const [resetFlag, setResetFlag] = useState(false);

    const handleClick = (category: string): void => {
        setResetFlag(true);
        setCategoryType(category);
    };

    const handleReset = () => {
        setCategoryType("");
        setResetFlag(false);
        setImageFlag(true);
    };

    useEffect(() => {
        const fetchDataAsync = async (): Promise<void> => {
            try {
                const resp = await ConnectorImageApi.getImageSec();
                if (resp?.data?.ConnectorImageSec) {
                    setImageFlag(false);
                    if (categoryType) {
                        const filteredData = resp.data.ConnectorImageSec.filter(
                            (item: ConnectorImage) => item.CategoryType?.toLowerCase() === categoryType.toLowerCase()
                        );
                        setImageData(filteredData);
                    } else {
                        setImageData(resp.data.ConnectorImageSec);
                    }
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchDataAsync();
    }, [categoryType, imageFlag]);

    const handleSearchClick = () => {
        setResetFlag(false);
        setCategoryType("");
    };

    const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value.toLowerCase().trim();
        const filteredData = imageData.filter((item: ConnectorImage) => item.ImageText?.toLowerCase().includes(value));
        if (value) {
            setImageData(filteredData);
        } else {
            setImageFlag(true);
        }
    };

    return (
        <div>
            <section className="section pb-mobile-0">
                <div className="my-contain">
                    <div className="tag-main-grid">
                        <div id="w-node-_67f7b985-244f-872d-797e-7858cccb8c85-ecc25f2b" className="hp-wrap">
                            <div
                                id="w-node-_5c112243-9f78-26a2-e39c-15eef8525446-ecc25f2b"
                                className="tags-wrapper cc-new-one"
                            >
                                <div className="hp-wrap cc-grow">
                                    <div
                                        id="w-node-_381b8541-62dd-3873-e3af-45927b8a1324-ecc25f2b"
                                        className="filters-top-wrap"
                                    >
                                        <h5 id="w-node-c130dd44-b335-39aa-16ec-f382ef8e5c9c-ecc25f2b">Categories</h5>
                                        {resetFlag && (
                                            <a
                                                href="#"
                                                onClick={handleReset}
                                                className="reset-link jetboost-active-show-2bmw"
                                            >
                                                Reset
                                            </a>
                                        )}
                                    </div>
                                    <div className="collection-list-wrapper jetboost-filter-2bmw w-dyn-list">
                                        <div role="list" className="int-category-cl cc-verticle-one w-dyn-items">
                                            {catogeoryList.map((category) => (
                                                <div key={category.id} role="listitem" className="filter-ci w-dyn-item">
                                                    <a
                                                        href="#"
                                                        className="fs-toc_link int-tags jetboost-filter-trigger cc-no-break w-inline-block"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            handleClick(category.CategoryList);
                                                        }}
                                                    >
                                                        <div fs-toc-element="link" className="text-block-2" />
                                                        {category.CategoryList}
                                                    </a>
                                                    <div className="w-embed">
                                                        <input
                                                            type="hidden"
                                                            className="jetboost-list-item"
                                                            defaultValue=""
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cta-wrapper secoundary-cta int-page cc-smaller">
                                <div className="content-wrapper">
                                    <div className="w-layout-grid hp-wrap gap--625">
                                        <div
                                            id="w-node-_9323d208-a43d-aa73-7c82-e1f3b868c06b-ecc25f2b"
                                            className="hp-wrap gap--25"
                                        >
                                            <p
                                                id="w-node-_4062a537-f2cf-a8d4-3e72-3a59b603b855-ecc25f2b"
                                                className="request-section-text"
                                            >
                                                Don’t see your favorite application?
                                                <br />‍
                                            </p>
                                            <div
                                                id="w-node-f59dc8c2-5294-f2e9-d898-7b8ef41464eb-ecc25f2b"
                                                className="button-wrapper left-justify"
                                            >
                                                <a
                                                    id="w-node-f59dc8c2-5294-f2e9-d898-7b8ef41464ec-ecc25f2b"
                                                    href="mailto:support@stitchflow.io"
                                                    className="btn secondary-btn w-inline-block"
                                                >
                                                    <div className="text-block-8">Request integration</div>
                                                    <div className="button-arrow w-embed">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="auto"
                                                            height="auto"
                                                            viewBox="0 0 16 16"
                                                            fill="none"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                clipRule="evenodd"
                                                                d="M9.70711 2.79289C9.31658 2.40237 8.68342 2.40237 8.29289 2.79289C7.90237 3.18342 7.90237 3.81658 8.29289 4.20711L11.0858 7H2.5C1.94772 7 1.5 7.44772 1.5 8C1.5 8.55228 1.94772 9 2.5 9H11.0858L8.29289 11.7929C7.90237 12.1834 7.90237 12.8166 8.29289 13.2071C8.68342 13.5976 9.31658 13.5976 9.70711 13.2071L14.2065 8.70774L14.2071 8.70711C14.2093 8.70493 14.2115 8.70274 14.2136 8.70055C14.4038 8.5069 14.4992 8.25507 14.5 8.003M14.2092 7.29502C14.304 7.3904 14.3757 7.50014 14.4241 7.61722C14.3738 7.49593 14.3004 7.38669 14.2092 7.29502ZM9.70711 2.79289L14.2069 7.29269L9.70711 2.79289Z"
                                                                fill="currentcolor"
                                                            />
                                                        </svg>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="w-node-_24f6938e-bcf8-1af8-957f-de80d0ffb8c5-ecc25f2b">
                            <div
                                id="w-node-_70e3e803-016e-eb0c-4bf9-0edc42054879-ecc25f2b"
                                className="w-layout-grid hp-wrap"
                            >
                                <div
                                    id="int-search"
                                    className="int-search-fb jetboost-filter-none-2bmw w-node-b25ab81d-c219-bc8e-d124-c595830210b9-ecc25f2b w-form"
                                >
                                    <form
                                        id="wf-form-Search-form"
                                        name="wf-form-Search-form"
                                        data-name="Search form"
                                        method="get"
                                        data-wf-page-id="65df97133369ceedecc25f2b"
                                        data-wf-element-id="b25ab81d-c219-bc8e-d124-c595830210ba"
                                    >
                                        <input
                                            className="int-search-input jetboost-list-search-input-w81q w-input"
                                            maxLength={256}
                                            name="Search"
                                            data-name="Search"
                                            placeholder="Search for an integration"
                                            type="text"
                                            id="Search"
                                            onKeyUp={handleKeyUp}
                                            onClick={handleSearchClick}
                                            required
                                        />
                                        <input
                                            type="submit"
                                            data-wait="Please wait..."
                                            className="hide w-button"
                                            defaultValue="Submit"
                                        />
                                    </form>
                                    <div className="w-form-done">
                                        <div>Thank you! Your submission has been received!</div>
                                    </div>
                                    <div className="w-form-fail">
                                        <div>Oops! Something went wrong while submitting the form.</div>
                                    </div>
                                </div>
                                <div
                                    id="w-node-_9fd45663-0861-cb9b-116d-d551a5d19fad-ecc25f2b"
                                    className="jetboost-list-wrapper-w81q jetboost-list-wrapper-2bmw w-dyn-list"
                                >
                                    {imageData.length > 0 ? (
                                        <div id="connectors" role="list" className="integration-cl w-dyn-items">
                                            {imageData.map((imageItem) => (
                                                <div key={imageItem.id} role="listitem" className="w-dyn-item">
                                                    <div
                                                        id="w-node-_5e74b06d-9fc5-d902-ae2e-42b11ea55572-ecc25f2b"
                                                        className="int-card-div cc-v-stretch"
                                                    >
                                                        <div className="logo-frame">
                                                            {imageItem.Image?.url && (
                                                                <Image
                                                                    src={imageItem?.Image?.url ?? ""}
                                                                    loading="lazy"
                                                                    alt={imageItem?.ImageText ?? ""}
                                                                    className="int-logo "
                                                                    width={80}
                                                                    height={80}
                                                                />
                                                            )}
                                                        </div>

                                                        <div className="mt-2-5rem center-align gap">
                                                            <h2
                                                                id="w-node-_8d5e95e9-bf46-82e8-2903-ee957cef1df4-ecc25f2b"
                                                                className="h4"
                                                            >
                                                                {imageItem?.ImageText}
                                                            </h2>
                                                            <div className="w-layout-grid hp-wrap gap-0-5 text-center mb-text-left">
                                                                <div
                                                                    id="w-node-d2bd237b-d8c8-66c0-9a19-2595d38c3906-ecc25f2b"
                                                                    className="smallest-para text-lightslategrey"
                                                                >
                                                                    {imageItem?.ImageTitle}
                                                                </div>
                                                                <div
                                                                    id="w-node-_609dac25-c49c-ee59-68a8-47ec7b1a99b6-ecc25f2b"
                                                                    className="w-layout-grid hp-wrap"
                                                                >
                                                                    <div
                                                                        id="w-node-ad279624-4141-b9d0-bb03-00ba16a14c50-ecc25f2b"
                                                                        className="smallest-para text-lightslategrey w-dyn-bind-empty"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="w-embed">
                                                        <input
                                                            type="hidden"
                                                            className="jetboost-list-item"
                                                            defaultValue=""
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="empty-state w-dyn-empty">
                                            <div className="hp-wrap justify-center">
                                                <div>
                                                    We couldn’t find any results matching your request. <br />
                                                    <br />
                                                </div>
                                                <a
                                                    id="w-node-da08a9da-1e9a-4153-ecb8-17e8e8ff31ff-ecc25f2b"
                                                    href="#"
                                                    className="btn w-button"
                                                >
                                                    Request connector
                                                </a>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div
                                    id="w-node-_35dce718-cf7c-0684-a09c-e4336797415c-ecc25f2b"
                                    className="pagination-wrapper hide"
                                >
                                    <a href="#" className="pegitation-lb jetboost-pagination-prev-qo4d w-button">
                                        Previous
                                    </a>
                                    <a href="#" className="pegitation-lb jetboost-pagination-next-qo4d w-button">
                                        Next
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="cta-wrapper secoundary-cta int-page cc-smaller cc-show-on-mobile">
                            <div className="content-wrapper">
                                <div className="w-layout-grid hp-wrap gap--625">
                                    <Image
                                        src="images/pre-cta-connectors.svg"
                                        loading="lazy"
                                        width={332.5}
                                        height={40}
                                        layout="intrinsic"
                                        alt=""
                                        className="fav-app-image"
                                    />
                                    <div
                                        id="w-node-_05df4f68-4dfe-9ee1-4311-2b0667a2ac26-ecc25f2b"
                                        className="hp-wrap gap--25"
                                    >
                                        <p
                                            id="w-node-_05df4f68-4dfe-9ee1-4311-2b0667a2ac27-ecc25f2b"
                                            className="request-section-text"
                                        >
                                            {"Don't see your favorite application?"}
                                        </p>
                                        <div
                                            id="w-node-_05df4f68-4dfe-9ee1-4311-2b0667a2ac29-ecc25f2b"
                                            className="button-wrapper left-justify"
                                        >
                                            <a
                                                id="w-node-_05df4f68-4dfe-9ee1-4311-2b0667a2ac2a-ecc25f2b"
                                                href="mailto:support@stitchflow.io"
                                                className="btn secondary-btn w-inline-block"
                                            >
                                                <div>Request integration</div>
                                                <div className="button-arrow w-embed">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="auto"
                                                        height="auto"
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M9.70711 2.79289C9.31658 2.40237 8.68342 2.40237 8.29289 2.79289C7.90237 3.18342 7.90237 3.81658 8.29289 4.20711L11.0858 7H2.5C1.94772 7 1.5 7.44772 1.5 8C1.5 8.55228 1.94772 9 2.5 9H11.0858L8.29289 11.7929C7.90237 12.1834 7.90237 12.8166 8.29289 13.2071C8.68342 13.5976 9.31658 13.5976 9.70711 13.2071L14.2065 8.70774L14.2071 8.70711C14.2093 8.70493 14.2115 8.70274 14.2136 8.70055C14.4038 8.5069 14.4992 8.25507 14.5 8.003M14.2092 7.29502C14.304 7.3904 14.3757 7.50014 14.4241 7.61722C14.3738 7.49593 14.3004 7.38669 14.2092 7.29502ZM9.70711 2.79289L14.2069 7.29269L9.70711 2.79289Z"
                                                            fill="currentcolor"
                                                        />
                                                    </svg>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-contain hide">
                    <div className="content-wrapper">
                        <div className="tags-grid">
                            <div id="w-node-b91da641-a7d3-b2a9-70f4-cd12f77e10a3-ecc25f2b" className="tags-wrapper">
                                <a
                                    href="#"
                                    className="all-integration-btn jetboost-filter-none-2bmw cc-active-style jetboost-inactive-show-2bmw w-inline-block"
                                >
                                    <div fs-toc-element="link">All</div>
                                </a>
                                <a
                                    href="#"
                                    className="all-integration-btn jetboost-filter-none-2bmw jetboost-active-show-2bmw w-inline-block"
                                >
                                    <div fs-toc-element="link">All</div>
                                </a>
                                <div className="collection-list-wrapper jetboost-filter-2bmw w-dyn-list">
                                    <div role="list" className="int-category-cl w-dyn-items">
                                        <div role="listitem" className="filter-ci w-dyn-item">
                                            <a
                                                href="#"
                                                className="fs-toc_link int-tags jetboost-filter-active cc-no-break w-inline-block"
                                            >
                                                <div fs-toc-element="link" className="w-dyn-bind-empty" />
                                            </a>
                                            <div className="w-embed">
                                                <input type="hidden" className="jetboost-list-item" defaultValue="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-dyn-empty">
                                        <div>No items found.</div>
                                    </div>
                                </div>
                            </div>
                            <div
                                id="int-search"
                                className="int-search-fb jetboost-filter-none-2bmw w-node-b91da641-a7d3-b2a9-70f4-cd12f77e10b3-ecc25f2b w-form"
                            >
                                <form
                                    id="wf-form-Search-form"
                                    name="wf-form-Search-form"
                                    data-name="Search form"
                                    method="get"
                                    data-wf-page-id="65df97133369ceedecc25f2b"
                                    data-wf-element-id="b91da641-a7d3-b2a9-70f4-cd12f77e10b4"
                                >
                                    <input
                                        className="int-search-input jetboost-list-search-input-w81q w-input"
                                        maxLength={256}
                                        name="Search-2"
                                        data-name="Search 2"
                                        placeholder="Search for a connector"
                                        type="text"
                                        id="Search-2"
                                        required
                                    />
                                    <input
                                        type="submit"
                                        data-wait="Please wait..."
                                        className="hide w-button"
                                        defaultValue="Submit"
                                    />
                                </form>
                                <div className="w-form-done">
                                    <div>Thank you! Your submission has been received!</div>
                                </div>
                                <div className="w-form-fail">
                                    <div>Oops! Something went wrong while submitting the form.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content-wrapper mt-3">
                        <div className="w-layout-grid hp-wrap gap-1-25">
                            <div
                                id="w-node-b91da641-a7d3-b2a9-70f4-cd12f77e10bf-ecc25f2b"
                                className="w-layout-grid hp-wrap gap-4-37"
                            >
                                <div
                                    id="w-node-b91da641-a7d3-b2a9-70f4-cd12f77e10c0-ecc25f2b"
                                    className="jetboost-list-wrapper-w81q jetboost-list-wrapper-2bmw w-dyn-list"
                                >
                                    <div id="connectors" role="list" className="integration-cl w-dyn-items">
                                        {imageList?.map((imageItem) => (
                                            <div key={imageItem.id} role="listitem" className="w-dyn-item">
                                                <div
                                                    id="w-node-b91da641-a7d3-b2a9-70f4-cd12f77e10c3-ecc25f2b"
                                                    className="int-card-div"
                                                >
                                                    <div className="logo-frame">
                                                        {imageItem?.Image?.url && (
                                                            <Image
                                                                src={imageItem.Image.url}
                                                                loading="lazy"
                                                                alt={imageItem.ImageText ?? ""}
                                                                className="int-logo "
                                                                width={80}
                                                                height={80}
                                                            />
                                                        )}
                                                    </div>
                                                    <div className="w-layout-grid hp-wrap gap-0-5 text-center mb-text-left">
                                                        <h2
                                                            id="w-node-b91da641-a7d3-b2a9-70f4-cd12f77e10c7-ecc25f2b"
                                                            className="h4 w-dyn-bind-empty"
                                                        >
                                                            {imageItem.ImageText}
                                                        </h2>
                                                        <div
                                                            id="w-node-b91da641-a7d3-b2a9-70f4-cd12f77e10c8-ecc25f2b"
                                                            className="smallest-para text-lightslategrey"
                                                        >
                                                            {imageItem.ImageTitle}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-embed">
                                                    <input
                                                        type="hidden"
                                                        className="jetboost-list-item"
                                                        defaultValue=""
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="w-dyn-empty">
                                        <div>No items found.</div>
                                    </div>
                                </div>
                                <div
                                    id="w-node-b91da641-a7d3-b2a9-70f4-cd12f77e10ce-ecc25f2b"
                                    className="pagination-wrapper hide"
                                >
                                    <a href="#" className="pegitation-lb jetboost-pagination-prev-qo4d w-button">
                                        Previous
                                    </a>
                                    <a href="#" className="pegitation-lb jetboost-pagination-next-qo4d w-button">
                                        Next
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ConnectorFilterSection;
