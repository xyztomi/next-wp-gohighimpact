"use client";

import { useState, useEffect } from "react";
import Papa from "papaparse";
import { Download, Search, Filter } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CSVRow {
  [key: string]: string;
}

interface CSVViewerProps {
  csvPath: string;
  title?: string;
}

export function CSVViewer({ csvPath, title = "SEO Audit Data" }: CSVViewerProps) {
  const [data, setData] = useState<CSVRow[]>([]);
  const [headers, setHeaders] = useState<string[]>([]);
  const [filteredData, setFilteredData] = useState<CSVRow[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(csvPath)
      .then((response) => {
        if (!response.ok) throw new Error("Failed to load CSV");
        return response.text();
      })
      .then((csvText) => {
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            const parsedData = results.data as CSVRow[];
            setData(parsedData);
            setFilteredData(parsedData);
            if (parsedData.length > 0) {
              setHeaders(Object.keys(parsedData[0]));
            }
            setLoading(false);
          },
          error: (err: Error) => {
            setError(err.message);
            setLoading(false);
          },
        });
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [csvPath]);

  useEffect(() => {
    let filtered = [...data];

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter((row) =>
        Object.values(row).some((value) =>
          value.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    // Apply status filter
    if (statusFilter !== "all" && data.length > 0 && "Status" in data[0]) {
      filtered = filtered.filter((row) => {
        const status = row["Status"] || "";
        if (statusFilter === "optimized") return status.includes("✅");
        if (statusFilter === "warning") return status.includes("⚠️");
        if (statusFilter === "error") return status.includes("❌");
        return true;
      });
    }

    setFilteredData(filtered);
  }, [searchTerm, statusFilter, data]);

  const getStatusBadge = (status: string) => {
    if (status.includes("✅")) {
      return <Badge className="bg-green-100 text-green-800">Optimized</Badge>;
    }
    if (status.includes("⚠️")) {
      return <Badge className="bg-yellow-100 text-yellow-800">Warning</Badge>;
    }
    if (status.includes("❌")) {
      return <Badge className="bg-red-100 text-red-800">Error</Badge>;
    }
    return <Badge variant="outline">{status}</Badge>;
  };

  const getSeoScoreColor = (score: string) => {
    const numScore = parseInt(score);
    if (isNaN(numScore)) return "text-gray-600";
    if (numScore >= 90) return "text-green-600 font-bold";
    if (numScore >= 80) return "text-green-600";
    if (numScore >= 70) return "text-yellow-600";
    return "text-red-600";
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center rounded-xl border border-gray-200 bg-white p-12">
        <div className="text-center">
          <div className="mb-4 inline-block h-8 w-8 animate-spin rounded-full border-4 border-brand-blue border-t-transparent" />
          <p className="text-sm text-gray-600">Loading audit data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-xl border border-red-200 bg-red-50 p-6">
        <p className="text-sm text-red-600">Error loading CSV: {error}</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <p className="mt-1 text-sm text-gray-600">
            {filteredData.length} of {data.length} pages
          </p>
        </div>
        <Button asChild variant="outline" size="sm">
          <a href={csvPath} download className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Download CSV
          </a>
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search pages, URLs, issues..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <Filter className="mr-2 h-4 w-4" />
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Pages</SelectItem>
            <SelectItem value="optimized">✅ Optimized</SelectItem>
            <SelectItem value="warning">⚠️ Warnings</SelectItem>
            <SelectItem value="error">❌ Errors</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-gray-200 bg-gray-50">
            <tr>
              {headers.map((header) => (
                <th
                  key={header}
                  className="whitespace-nowrap px-4 py-3 font-semibold text-gray-900"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredData.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-50">
                {headers.map((header) => {
                  const value = row[header] || "";

                  // Special rendering for specific columns
                  if (header === "Status") {
                    return (
                      <td key={header} className="px-4 py-3">
                        {getStatusBadge(value)}
                      </td>
                    );
                  }

                  if (header === "URL") {
                    return (
                      <td key={header} className="px-4 py-3">
                        <a
                          href={value}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-xs text-brand-blue hover:underline"
                        >
                          {value}
                        </a>
                      </td>
                    );
                  }

                  if (header === "SEO Score") {
                    return (
                      <td key={header} className={`px-4 py-3 ${getSeoScoreColor(value)}`}>
                        {value}
                      </td>
                    );
                  }

                  if (header === "Priority Issues" || header === "Recommendations") {
                    return (
                      <td key={header} className="max-w-xs px-4 py-3">
                        <p className="truncate text-xs text-gray-600" title={value}>
                          {value}
                        </p>
                      </td>
                    );
                  }

                  // Boolean/emoji columns
                  if (value.includes("✅") || value.includes("⚠️") || value.includes("❌")) {
                    return (
                      <td key={header} className="px-4 py-3 text-center">
                        {value}
                      </td>
                    );
                  }

                  return (
                    <td key={header} className="max-w-xs px-4 py-3">
                      <p className="truncate text-xs text-gray-700" title={value}>
                        {value}
                      </p>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredData.length === 0 && (
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-8 text-center">
          <p className="text-sm text-gray-600">No pages match your search criteria.</p>
        </div>
      )}
    </div>
  );
}
