class Api {
    private baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl + "/";
    }

    private async request<D = any, B = any>(url: string, method: "GET" | "POST" | "DELETE" | "PATCH", body: B | null = null): Promise<{ data: D, error: boolean, message?: string }> {
        const headers = {
            'Content-Type': 'application/json',
          };
        
        return new Promise((resolve) => {
            setTimeout(async () => {
                try {
                    let response: Response;

                    if (method === 'GET' || method === 'DELETE') {
                        response = await fetch(this.baseUrl + url);
                    } else {
                        response = await fetch(this.baseUrl + url, {
                            method,
                            headers,
                            body: body ? JSON.stringify(body) : undefined,
                        });
                    }

                    // I didn't implement random error 
                    if (!response.ok) throw new Error('Network response was not ok');

                    const data = await response.json();

                    resolve({ data, error: false });

                // Should be a right type not any
                } catch (error: any) {
                    resolve({ data: null as any, error: true, message: error?.message });
                }
                }, 1500);
        })
    }

    public async get<D>(url: string) {
        return this.request<D>(url, "GET");
    }

    public async post<D, B>(url: string, body: B) {
        return this.request<D,B>(url, "POST", body);
    }

    public async update<D,B>(url: string, body: B) {
        return this.request<D,B>(url, "PATCH", body)
    }

    public async delete<D, B>(url: string, body?: B) {
        return this.request<D,B>(url, "DELETE", body);
    }
}


export default Api